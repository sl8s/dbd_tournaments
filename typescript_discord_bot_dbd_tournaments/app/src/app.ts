import { Client, GatewayIntentBits, Interaction, Message } from "discord.js";
import dotenv from "dotenv";
import path from "path";
import { interactions, launch, messages, shutdown } from "./utilities/app_methods";

dotenv.config({ path: path.resolve(process.cwd(), "..", ".env") });

const client: Client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
});

client.on("clientReady", () => launch(client));
client.on("interactionCreate", (interaction: Interaction) => interactions(client, interaction));
client.on("messageCreate", (message: Message) => messages(client, message));
client.login(process.env.DISCORD_BOT_TOKEN);
process.on("SIGINT", () => shutdown(client,"SIGINT"));
process.on("SIGTERM", () => shutdown(client,"SIGTERM"));