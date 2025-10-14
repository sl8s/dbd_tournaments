import BaseDataType from "../../utilities/base_data_type";
import ExampleMiddlewareDataType from "./example_middleware_data_type";

async function exampleMiddleware(baseDataType: BaseDataType): Promise<boolean> {
    baseDataType as ExampleMiddlewareDataType;
    return true;
}

export default exampleMiddleware;