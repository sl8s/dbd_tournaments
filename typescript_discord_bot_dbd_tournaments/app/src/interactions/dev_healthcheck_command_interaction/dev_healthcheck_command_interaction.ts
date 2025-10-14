import { ChatInputCommandInteraction } from "discord.js";
import { debugPrintMethod } from "smvp_typescript";
import DefaultPostgreSQLService from "../../services/postgre_sql_service/default_postgre_sql_service";
import BaseDataType from "../../utilities/base_data_type";
import DevHealthcheckCommandInteractionDataType from "./dev_healthcheck_command_interaction_data_type";

async function devHealthcheckCommandInteraction(baseDataType: BaseDataType): Promise<void> {
    const dataType = baseDataType as DevHealthcheckCommandInteractionDataType;
    const interaction = dataType.interaction;
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