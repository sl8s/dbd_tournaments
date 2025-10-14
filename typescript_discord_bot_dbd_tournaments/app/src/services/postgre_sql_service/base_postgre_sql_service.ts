import { Client } from "pg";
import { Result } from "smvp_typescript";

abstract class BasePostgreSQLService {
    protected constructor() {
    }

    public abstract getClient(): Client | null;
    public abstract isDBAlive(): Promise<Result<boolean>>;
    public abstract connect(): Promise<void>;
    public abstract disconnect(): Promise<void>;
}

export default BasePostgreSQLService;