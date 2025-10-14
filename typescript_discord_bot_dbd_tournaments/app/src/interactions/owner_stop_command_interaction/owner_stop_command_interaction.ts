import BaseDataType from "../../utilities/base_data_type";
import OwnerStopCommandInteractionDataType from "./owner_stop_command_interaction_data_type";

async function ownerStopCommandInteraction(baseDataType: BaseDataType): Promise<void> {
    const dataType = baseDataType as OwnerStopCommandInteractionDataType;
    const interaction = dataType.interaction;
    await interaction.reply("Success");
}

export default ownerStopCommandInteraction;