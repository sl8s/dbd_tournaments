import { ChatInputCommandInteraction, Client, Team, User } from "discord.js";
import { debugPrintMethod } from "smvp_typescript";
import DefaultPostgreSQLService from "../services/postgre_sql_service/default_postgre_sql_service";

async function devHealthcheckCommandInteraction(client: Client, interaction: ChatInputCommandInteraction): Promise<void> {
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
    const defaultPostgreSQLService = DefaultPostgreSQLService.instance;
    const resultIsDBAlive = await defaultPostgreSQLService.isDBAlive();
    const isDBDead = resultIsDBAlive.exceptionAdapter.hasException();
    if(isDBDead) {
        await a0QQDevHealthcheckCommandInteractionQQIsDBDead(interaction);
        return;
    }
    await interaction.reply("services: [ { \"name\" : \"default_postgre_sql_service\", \"is_alive\" : true } ]");
}

async function a0QQDevHealthcheckCommandInteractionQQIsDBDead(interaction: ChatInputCommandInteraction): Promise<void> {
    debugPrintMethod("a0QQDevHealthcheckCommandInteractionQQIsDBDead");
    await interaction.reply("services: [ { \"name\" : \"default_postgre_sql_service\", \"is_alive\" : false } ]");
}

export default devHealthcheckCommandInteraction;