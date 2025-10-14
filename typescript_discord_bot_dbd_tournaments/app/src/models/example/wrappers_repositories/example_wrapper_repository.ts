import { BaseModelWrapperRepository, ResultModelWrapper } from "smvp_typescript";
import BasePostgreSQLService from "../../../services/postgre_sql_service/base_postgre_sql_service";
import ExampleWrapper from "../wrappers/example_wrapper";
import ArrayExampleWrapper from "../wrappers/array_example_wrapper";

class ExampleWrapperRepository<T extends ExampleWrapper, Y extends ArrayExampleWrapper> extends BaseModelWrapperRepository {
    protected readonly basePostgreSQLService: BasePostgreSQLService;

    public constructor(basePostgreSQLService: BasePostgreSQLService) {
        super();
        this.basePostgreSQLService = basePostgreSQLService;
    }

    public override dispose(): void {
    }
    
    public async getExampleFromPostgreSQLService(): Promise<ResultModelWrapper<T>> {
        throw Error();
    }
}

export default ExampleWrapperRepository;