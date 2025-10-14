import { ButtonInteraction, Client } from "discord.js";
import BaseDataType from "../../utilities/base_data_type";

class OwnerStartCommandCancelButtonInteractionDataType extends BaseDataType {
    public readonly interaction: ButtonInteraction;

    public constructor(client: Client, interaction: ButtonInteraction) {
        super(client);
        this.interaction = interaction;
    }
}

export default OwnerStartCommandCancelButtonInteractionDataType;