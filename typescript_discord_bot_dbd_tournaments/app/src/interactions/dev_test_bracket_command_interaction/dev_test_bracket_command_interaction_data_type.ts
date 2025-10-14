import { ChatInputCommandInteraction, Client } from "discord.js";
import BaseDataType from "../../utilities/base_data_type";

class DevTestBracketCommandInteractionDataType extends BaseDataType {
    public readonly interaction: ChatInputCommandInteraction;
    public readonly size: number;

    public constructor(client: Client, interaction: ChatInputCommandInteraction) {
        super(client);
        this.interaction = interaction;
        this.size = interaction.options.getInteger("size", true);
    }
}

export default DevTestBracketCommandInteractionDataType;