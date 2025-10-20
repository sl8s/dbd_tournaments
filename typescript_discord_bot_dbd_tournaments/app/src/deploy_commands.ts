import { REST, RESTPostAPIApplicationCommandsJSONBody, Routes, SlashCommandBuilder } from "discord.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "..", ".env") });

const commands: RESTPostAPIApplicationCommandsJSONBody[] = [
    new SlashCommandBuilder()
        .setName("dev_healthcheck")
        .setDescription("Dev-only: Check services health")
        .toJSON(),
    new SlashCommandBuilder()
        .setName("dev_test_bracket")
        .setDescription("Dev-only: Create a test bracket with given size")
        .addIntegerOption(builder => builder
            .setName("size")
            .setDescription("Number of players")
            .setRequired(true)
            .setMinValue(2)
            .setMaxValue(32)
        ).toJSON(),
];

async function main(): Promise<void> {
    await new REST({ version: "10" })
        .setToken(process.env.DISCORD_BOT_TOKEN ?? "")
        .put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID ?? ""),{ body: commands });
}
main();