import { APIRole, ChatInputCommandInteraction, Client, Role } from "discord.js";
import BaseDataType from "../../utilities/base_data_type";

class OwnerAssignManagerCommandInteractionDataType extends BaseDataType {
    public readonly interaction: ChatInputCommandInteraction;
    public readonly role: Role | APIRole;

    public constructor(client: Client, interaction: ChatInputCommandInteraction) {
        super(client);
        this.interaction = interaction;
        this.role = interaction.options.getRole("role", true);
    }
}

export default OwnerAssignManagerCommandInteractionDataType;