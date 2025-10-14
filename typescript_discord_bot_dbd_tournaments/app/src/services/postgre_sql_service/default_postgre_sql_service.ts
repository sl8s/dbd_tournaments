import { Client } from "pg";
import BasePostgreSQLService from "./base_postgre_sql_service";
import { EnumGuilty, LocalException, Result } from "smvp_typescript";

class DefaultPostgreSQLService extends BasePostgreSQLService {
    public static readonly instance = new DefaultPostgreSQLService();
    private client: Client | null;

    private constructor() {
        super();
        this.client = null;
    }

    public override getClient(): Client | null {
        return this.client;
    }

    public override async isDBAlive(): Promise<Result<boolean>> {
        try {
            await this.client!.query("SELECT 1");
            return Result.success<boolean>(true);
        } catch(exception: any) {
            return Result.exception<boolean>(new LocalException(
                "DefaultPostgreSQLService",
                "DB is dead",
                EnumGuilty.developer,
                exception.toString()));
        }
    }

    public override async connect(): Promise<void> {
        if(this.client != null) {
            return;
        }
        this.client = new Client({
            host: process.env.DB_DEPENDENCY_NAME,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            port: Number(process.env.POSTGRES_PORT)
        });
        await this.client.connect();
    }

    public override async disconnect(): Promise<void> {
        await this.client?.end();
        this.client = null;
    }
}

export default DefaultPostgreSQLService;