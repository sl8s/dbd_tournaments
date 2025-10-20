import { ChatInputCommandInteraction, Client, Team, User } from "discord.js";

async function devTestBracketCommandInteraction(client: Client, interaction: ChatInputCommandInteraction): Promise<void> {
    interaction.options.getInteger("size", true);
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
    await interaction.reply("Success");
}

export default devTestBracketCommandInteraction;