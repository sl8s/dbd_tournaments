import { ChatInputCommandInteraction, Client } from "discord.js";
import BaseDataType from "../../utilities/base_data_type";

class OwnerStopCommandInteractionDataType extends BaseDataType {
    public readonly interaction: ChatInputCommandInteraction;

    public constructor(client: Client, interaction: ChatInputCommandInteraction) {
        super(client);
        this.interaction = interaction;
    }
}

export default OwnerStopCommandInteractionDataType;