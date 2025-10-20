import { ChatInputCommandInteraction, Client } from "discord.js";

async function ownerAssignManagerCommandInteraction(_client: Client, interaction: ChatInputCommandInteraction, ): Promise<void> {
    const role = interaction.options.getRole("role", true);
    const guild = interaction.guild ?? null;
    if (guild === null) {
        return;
    }
    const isNotOwnerGuild = interaction.user.id !== guild.ownerId;
    if (isNotOwnerGuild) {
        return;
    }
    await interaction.reply("Success" + role.name);
}

export default ownerAssignManagerCommandInteraction;