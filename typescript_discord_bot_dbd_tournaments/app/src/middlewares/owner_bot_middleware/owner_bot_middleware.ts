import { Client, Interaction, Team, User } from "discord.js";
import { debugPrintMethod } from "smvp_typescript";
import OwnerBotMiddlewareDataType from "./owner_bot_middleware_data_type";
import BaseDataType from "../../utilities/base_data_type";

async function ownerBotMiddleware(baseDataType: BaseDataType): Promise<boolean> {
    const dataType = baseDataType as OwnerBotMiddlewareDataType;
    const client = dataType.client;
    const interaction = dataType.interaction;
    const ownerBot = client.application?.owner ?? null;
    const isDoesNotHaveOwnerBot = ownerBot === null;
    if (isDoesNotHaveOwnerBot) {
        return a0QQOwnerBotMiddlewareQQIsDoesNotHaveOwnerBot(client,interaction);
    }
    const isOwnerBotTypeUser = ownerBot instanceof User;
    if(isOwnerBotTypeUser) {
        return a1QQOwnerBotMiddlewareQQIsOwnerBotTypeUser(interaction,ownerBot);
    }
    const isOwnerBotTypeTeam = ownerBot instanceof Team;
    if(isOwnerBotTypeTeam) {
        return a2QQOwnerBotMiddlewareQQIsOwnerBotTypeTeam(interaction,ownerBot);
    }
    return false;
}

async function a0QQOwnerBotMiddlewareQQIsDoesNotHaveOwnerBot(client: Client, interaction: Interaction): Promise<boolean> {
    debugPrintMethod("a0QQOwnerBotMiddlewareQQIsDoesNotHaveOwnerBot");
    const clientApplication = await client.application?.fetch();
    const ownerBot = clientApplication?.owner ?? null;
    if (ownerBot === null) {
        return false;
    }
    const isOwnerBotTypeUser = ownerBot instanceof User;
    if(isOwnerBotTypeUser) {
        return a0a0QQOwnerBotMiddlewareQQIsOwnerBotTypeUser(interaction,ownerBot);
    }
    const isOwnerBotTypeTeam = ownerBot instanceof Team;
    if(isOwnerBotTypeTeam) {
        return a0a1QQOwnerBotMiddlewareQQIsOwnerBotTypeTeam(interaction,ownerBot);
    }
    return false;
}

async function a0a0QQOwnerBotMiddlewareQQIsOwnerBotTypeUser(interaction: Interaction, user: User): Promise<boolean> {
    debugPrintMethod("a0a0QQOwnerBotMiddlewareQQIsOwnerBotTypeUser");
    if(interaction.user.id === user.id) {
        return true;
    }
    return false;
}

async function a0a1QQOwnerBotMiddlewareQQIsOwnerBotTypeTeam(interaction: Interaction, team: Team): Promise<boolean> {
    debugPrintMethod("a0a1QQOwnerBotMiddlewareQQIsOwnerBotTypeTeam");
    if(team.members.has(interaction.user.id)) {
        return true;
    }
    return false;
}

async function a1QQOwnerBotMiddlewareQQIsOwnerBotTypeUser(interaction: Interaction, user: User): Promise<boolean> {
    debugPrintMethod("a1QQOwnerBotMiddlewareQQIsOwnerBotTypeUser");
    if(interaction.user.id === user.id) {
        return true;
    }
    return false;
}

async function a2QQOwnerBotMiddlewareQQIsOwnerBotTypeTeam(interaction: Interaction, team: Team): Promise<boolean> {
    debugPrintMethod("a2QQOwnerBotMiddlewareQQIsOwnerBotTypeTeam");
    if(team.members.has(interaction.user.id)) {
        return true;
    }
    return false;
}

export default ownerBotMiddleware;