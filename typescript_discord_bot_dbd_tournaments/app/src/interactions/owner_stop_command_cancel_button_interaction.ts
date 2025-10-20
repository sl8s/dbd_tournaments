import { ButtonInteraction, Client } from "discord.js";

async function ownerStopCommandCancelButtonInteraction(_client: Client, interaction: ButtonInteraction): Promise<void> {
    const guild = interaction.guild ?? null;
    if (guild === null) {
        return;
    }
    const isNotOwnerGuild = interaction.user.id !== guild.ownerId;
    if (isNotOwnerGuild) {
        return;
    }
}

export default ownerStopCommandCancelButtonInteraction;