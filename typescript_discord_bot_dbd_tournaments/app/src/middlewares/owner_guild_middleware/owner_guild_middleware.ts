import BaseDataType from "../../utilities/base_data_type";
import OwnerGuildMiddlewareDataType from "./owner_guild_middleware_data_type";

async function ownerGuildMiddleware(baseDataType: BaseDataType): Promise<boolean> {
    const dataType = baseDataType as OwnerGuildMiddlewareDataType;
    const interaction = dataType.interaction;
    const guild = interaction.guild ?? null;
    if (guild === null) {
        return false;
    }
    const isNotOwnerGuild = interaction.user.id !== guild.ownerId;
    if (isNotOwnerGuild) {
        return false;
    }
    return true;
}

export default ownerGuildMiddleware;