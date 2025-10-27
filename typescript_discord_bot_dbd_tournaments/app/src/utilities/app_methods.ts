import { ButtonInteraction, ChatInputCommandInteraction, Client, Interaction, Message } from "discord.js";
import { debugPrint, debugPrintMethod } from "smvp_typescript";
import devHealthcheckCommandInteraction from "../interactions/dev_healthcheck_command_interaction";
import devTestBracketCommandInteraction from "../interactions/dev_test_bracket_command_interaction";
import ownerAssignManagerCommandInteraction from "../interactions/owner_assign_manager_command_interaction";
import ownerStartCommandCancelButtonInteraction from "../interactions/owner_start_command_cancel_button_interaction";
import ownerStartCommandConfirmationButtonInteraction from "../interactions/owner_start_command_confirmation_button_interaction";
import ownerStartCommandInteraction from "../interactions/owner_start_command_interaction";
import ownerStopCommandCancelButtonInteraction from "../interactions/owner_stop_command_cancel_button_interaction";
import ownerStopCommandConfirmationButtonInteraction from "../interactions/owner_stop_command_confirmation_button_interaction";
import ownerStopCommandInteraction from "../interactions/owner_stop_command_interaction";
import DefaultPostgreSQLService from "../services/postgre_sql_service/default_postgre_sql_service";

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

export async function messages(client: Client, message: Message): Promise<void> {
  if (message.author.bot) { 
    return; 
  }
  const isChatInputCommandAndDevMode = message.content.charAt(0) === "!" && process.env.DOCKERFILE === "Dockerfile.dev";
  if(isChatInputCommandAndDevMode) {
    await a0QQMessagesQQIsChatInputCommandAndDevMode(client,message);
    return;
  }
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
    await ownerAssignManagerCommandInteraction(client,interaction);
    return;
  }
  if (interaction.commandName === "owner_start") {
    await ownerStartCommandInteraction(client,interaction);
    return;
  }
  if (interaction.commandName === "owner_stop") {
    await ownerStopCommandInteraction(client,interaction);
    return;
  }
  if (interaction.commandName === "dev_healthcheck") {
    await devHealthcheckCommandInteraction(client,interaction);
    return;
  }
  if (interaction.commandName === "dev_test_bracket") {
    await devTestBracketCommandInteraction(client,interaction);
    return;
  }
}

async function a1QQInteractionsQQIsButton(client: Client, interaction: ButtonInteraction): Promise<void> {
  debugPrintMethod("a1QQInteractionsQQIsButton");
  if(interaction.customId === "owner_start_command_confirmation_button_interaction") {
    await ownerStartCommandConfirmationButtonInteraction(client,interaction);
    return;
  }
  if(interaction.customId === "owner_start_command_cancel_button_interaction") {
    await ownerStartCommandCancelButtonInteraction(client,interaction);
    return;
  }
  if(interaction.customId === "owner_stop_command_confirmation_button_interaction") {
    await ownerStopCommandConfirmationButtonInteraction(client,interaction);
    return;
  }
  if(interaction.customId === "owner_stop_command_cancel_button_interaction") {
    await ownerStopCommandCancelButtonInteraction(client,interaction);
    return;
  }
}

async function a0QQMessagesQQIsChatInputCommandAndDevMode(_client: Client, message: Message): Promise<void> {
  debugPrintMethod("a0QQMessagesQQIsChatInputCommandAndDevMode");
  if(message.content === "!test") {
    await message.reply("Hello");
    return;
  }
}
