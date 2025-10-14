import { Client, Interaction } from "discord.js";
import BaseDataType from "../../utilities/base_data_type";

class OwnerBotMiddlewareDataType extends BaseDataType {
    public readonly interaction: Interaction;

    public constructor(client: Client, interaction: Interaction) {
        super(client);
        this.interaction = interaction;
    }
}

export default OwnerBotMiddlewareDataType;