import BaseDataType from "../../utilities/base_data_type";
import OwnerStartCommandInteractionDataType from "./owner_start_command_interaction_data_type";

async function ownerStartCommandInteraction(baseDataType: BaseDataType): Promise<void> {
    const dataType = baseDataType as OwnerStartCommandInteractionDataType;
    const interaction = dataType.interaction;
    await interaction.reply("Success");
}

export default ownerStartCommandInteraction;