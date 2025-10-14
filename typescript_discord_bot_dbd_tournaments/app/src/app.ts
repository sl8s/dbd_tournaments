import { Client, GatewayIntentBits, Interaction, CacheType, Message } from "discord.js";
import dotenv from "dotenv";
import path from "path";
import { shutdown, launch, interactions, messages } from "./utilities/app_methods";

dotenv.config({ path: path.resolve(process.cwd(), "..", ".env") });

const client: Client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
});

client.on("ready", () => launch(client));
client.on("interactionCreate", (interaction: Interaction<CacheType>) => interactions(client, interaction));
client.on("messageCreate", (message: Message) => messages(client, message));
client.login(process.env.DISCORD_BOT_TOKEN);
process.on("SIGINT", () => shutdown(client,"SIGINT"));
process.on("SIGTERM", () => shutdown(client,"SIGTERM"));