import BaseDataType from "../../utilities/base_data_type";
import OwnerAssignManagerCommandInteractionDataType from "./owner_assign_manager_command_interaction_data_type";

async function ownerAssignManagerCommandInteraction(baseDataType: BaseDataType): Promise<void> {
    const dataType = baseDataType as OwnerAssignManagerCommandInteractionDataType;
    const interaction = dataType.interaction;
    await interaction.reply("Success");
}

export default ownerAssignManagerCommandInteraction;