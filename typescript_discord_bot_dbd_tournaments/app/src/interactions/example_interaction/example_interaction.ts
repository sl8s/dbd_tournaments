import BaseDataType from "../../utilities/base_data_type";
import ExampleInteractionDataType from "./example_interaction_data_type";

async function exampleInteraction(baseDataType: BaseDataType): Promise<void> {
    baseDataType as ExampleInteractionDataType;
}

export default exampleInteraction;