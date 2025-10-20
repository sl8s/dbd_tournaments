import { ChatInputCommandInteraction, Client } from "discord.js";

async function ownerStartCommandInteraction(client: Client, interaction: ChatInputCommandInteraction): Promise<void> {
    const guild = interaction.guild ?? null;
    if (guild === null) {
        return;
    }
    const isNotOwnerGuild = interaction.user.id !== guild.ownerId;
    if (isNotOwnerGuild) {
        return;
    }
    await interaction.reply("Success");
}

export default ownerStartCommandInteraction;