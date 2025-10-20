import { ChatInputCommandInteraction, Client, Team, User } from "discord.js";

async function devTestBracketCommandInteraction(client: Client, interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply();
    const size = interaction.options.getInteger("size", true);
    const clientApplication = await client.application?.fetch();
    const ownerBot = clientApplication?.owner ?? null;
    const isDoesNotHaveOwnerBot = ownerBot === null;
    if (isDoesNotHaveOwnerBot) {
        return;
    }
    const isOwnerBotTypeUserAndYouNotOwner = ownerBot instanceof User && interaction.user.id !== ownerBot.id;
    if(isOwnerBotTypeUserAndYouNotOwner) {
        return;
    }
    const isOwnerBotTypeTeamAndYouNotOwner = ownerBot instanceof Team && !(ownerBot.members.has(interaction.user.id));
    if(isOwnerBotTypeTeamAndYouNotOwner) {
        return;
    }
    await interaction.editReply("Success: " + size);
}

export default devTestBracketCommandInteraction;