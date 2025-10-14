import BaseDataType from "../../utilities/base_data_type";
import DevTestBracketCommandInteractionDataType from "./dev_test_bracket_command_interaction_data_type";

async function devTestBracketCommandInteraction(baseDataType: BaseDataType): Promise<void> {
    const dataType = baseDataType as DevTestBracketCommandInteractionDataType;
    const interaction = dataType.interaction;
    await interaction.reply("Success");
}

export default devTestBracketCommandInteraction;