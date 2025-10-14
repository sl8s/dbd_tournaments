import { ButtonInteraction, ChannelType, ChatInputCommandInteraction, Client, Interaction, Message } from "discord.js";
import { debugPrint, debugPrintMethod } from "smvp_typescript";
import devDeployCommandsCommandInteraction from "../interactions/dev_deploy_commands_command_interaction/dev_deploy_commands_command_interaction";
import DevDeployCommandsCommandInteractionDataType from "../interactions/dev_deploy_commands_command_interaction/dev_deploy_commands_command_interaction_data_type";
import devHealthcheckCommandInteraction from "../interactions/dev_healthcheck_command_interaction/dev_healthcheck_command_interaction";
import DevHealthcheckCommandInteractionDataType from "../interactions/dev_healthcheck_command_interaction/dev_healthcheck_command_interaction_data_type";
import devTestBracketCommandInteraction from "../interactions/dev_test_bracket_command_interaction/dev_test_bracket_command_interaction";
import DevTestBracketCommandInteractionDataType from "../interactions/dev_test_bracket_command_interaction/dev_test_bracket_command_interaction_data_type";
import ownerAssignManagerCommandInteraction from "../interactions/owner_assign_manager_command_interaction/owner_assign_manager_command_interaction";
import OwnerAssignManagerCommandInteractionDataType from "../interactions/owner_assign_manager_command_interaction/owner_assign_manager_command_interaction_data_type";
import ownerStartCommandInteraction from "../interactions/owner_start_command_interaction/owner_start_command_interaction";
import OwnerStartCommandInteractionDataType from "../interactions/owner_start_command_interaction/owner_start_command_interaction_data_type";
import ownerStopCommandInteraction from "../interactions/owner_stop_command_interaction/owner_stop_command_interaction";
import OwnerStopCommandInteractionDataType from "../interactions/owner_stop_command_interaction/owner_stop_command_interaction_data_type";
import ownerBotMiddleware from "../middlewares/owner_bot_middleware/owner_bot_middleware";
import OwnerBotMiddlewareDataType from "../middlewares/owner_bot_middleware/owner_bot_middleware_data_type";
import ownerGuildMiddleware from "../middlewares/owner_guild_middleware/owner_guild_middleware";
import OwnerGuildMiddlewareDataType from "../middlewares/owner_guild_middleware/owner_guild_middleware_data_type";
import DefaultPostgreSQLService from "../services/postgre_sql_service/default_postgre_sql_service";
import CommandChain from "./similar_to_chain_of_responsibility_pattern/command_chain";
import EndPoint from "./similar_to_chain_of_responsibility_pattern/end_point";
import Middleware from "./similar_to_chain_of_responsibility_pattern/middleware";
import OwnerStartCommandConfirmationButtonInteractionDataType from "../interactions/owner_start_command_confirmation_button_interaction/owner_start_command_confirmation_button_interaction_data_type";
import ownerStartCommandConfirmationButtonInteraction from "../interactions/owner_start_command_confirmation_button_interaction/owner_start_command_confirmation_button_interaction";
import OwnerStartCommandCancelButtonInteractionDataType from "../interactions/owner_start_command_cancel_button_interaction/owner_start_command_cancel_button_interaction_data_type";
import ownerStartCommandCancelButtonInteraction from "../interactions/owner_start_command_cancel_button_interaction/owner_start_command_cancel_button_interaction";
import OwnerStopCommandConfirmationButtonInteractionDataType from "../interactions/owner_stop_command_confirmation_button_interaction/owner_stop_command_confirmation_button_interaction_data_type";
import ownerStopCommandConfirmationButtonInteraction from "../interactions/owner_stop_command_confirmation_button_interaction/owner_stop_command_confirmation_button_interaction";
import OwnerStopCommandCancelButtonInteractionDataType from "../interactions/owner_stop_command_cancel_button_interaction/owner_stop_command_cancel_button_interaction_data_type";
import ownerStopCommandCancelButtonInteraction from "../interactions/owner_stop_command_cancel_button_interaction/owner_stop_command_cancel_button_interaction";

export async function launch(client: Client): Promise<void> {
  await DefaultPostgreSQLService.instance.connect();
  debugPrint("Logged in as: " + client.user?.toString());
}

export async function interactions(client: Client, interaction: Interaction): Promise<void> {
  const isChatInputCommand = interaction.isChatInputCommand();
  if(isChatInputCommand) {
    await a0QQInteractionsQQIsChatInputCommand(client,interaction);
    return;
  }
  const isButton = interaction.isButton();
  if(isButton) {
    await a1QQInteractionsQQIsButton(client,interaction);
    return;
  }
}

export async function messages(_client: Client, message: Message): Promise<void> {
  if (message.author.bot) { 
    return; 
  }
  if (message.channel.type !== ChannelType.GuildText) { 
    return; 
  }
  const guildId = message.guild?.id ?? null;
  if (guildId === null) {
    return;
  }
  // const channelId = message.channelId;
  // const content = message.content;
}

export async function shutdown(client: Client, signal: string): Promise<void> {
    debugPrint("Received " + signal + " shutting down...");
    await DefaultPostgreSQLService.instance.disconnect();
    await client.destroy();
    process.exit(0);
}

async function a0QQInteractionsQQIsChatInputCommand(client: Client, interaction: ChatInputCommandInteraction): Promise<void> {
  debugPrintMethod("a0QQInteractionsQQIsChatInputCommand");
  if (interaction.commandName === "owner_assign_manager") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerAssignManagerCommandInteractionDataType(client,interaction),
        ownerAssignManagerCommandInteraction)).execute();
    return;
  }
  if (interaction.commandName === "owner_start") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerStartCommandInteractionDataType(client,interaction),
        ownerStartCommandInteraction)).execute();
    return;
  }
  if (interaction.commandName === "owner_stop") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerStopCommandInteractionDataType(client,interaction),
        ownerStopCommandInteraction)).execute();
    return;
  }
  if (interaction.commandName === "dev_healthcheck") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerBotMiddlewareDataType(client,interaction),
          ownerBotMiddleware)
      ],
      new EndPoint(
        new DevHealthcheckCommandInteractionDataType(client,interaction),
        devHealthcheckCommandInteraction)).execute();
    return;
  }
  if (interaction.commandName === "dev_deploy_commands") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerBotMiddlewareDataType(client,interaction),
          ownerBotMiddleware)
      ],
      new EndPoint(
        new DevDeployCommandsCommandInteractionDataType(client,interaction),
        devDeployCommandsCommandInteraction)).execute();
    return;
  }
  if (interaction.commandName === "dev_test_bracket") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerBotMiddlewareDataType(client,interaction),
          ownerBotMiddleware)
      ],
      new EndPoint(
        new DevTestBracketCommandInteractionDataType(client,interaction),
        devTestBracketCommandInteraction)).execute();
    return;
  }
}

async function a1QQInteractionsQQIsButton(client: Client, interaction: ButtonInteraction): Promise<void> {
  debugPrintMethod("a1QQInteractionsQQIsButton");
  if(interaction.customId === "owner_start_command_confirmation_button_interaction") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerStartCommandConfirmationButtonInteractionDataType(client,interaction),
        ownerStartCommandConfirmationButtonInteraction)).execute();
    return;
  }
  if(interaction.customId === "owner_start_command_cancel_button_interaction") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerStartCommandCancelButtonInteractionDataType(client,interaction),
        ownerStartCommandCancelButtonInteraction)).execute();
    return;
  }
  if(interaction.customId === "owner_stop_command_confirmation_button_interaction") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerStopCommandConfirmationButtonInteractionDataType(client,interaction),
        ownerStopCommandConfirmationButtonInteraction)).execute();
    return;
  }
  if(interaction.customId === "owner_stop_command_cancel_button_interaction") {
    await new CommandChain(
      [
        new Middleware(
          new OwnerGuildMiddlewareDataType(client,interaction),
          ownerGuildMiddleware)
      ],
      new EndPoint(
        new OwnerStopCommandCancelButtonInteractionDataType(client,interaction),
        ownerStopCommandCancelButtonInteraction)).execute();
    return;
  }
}

