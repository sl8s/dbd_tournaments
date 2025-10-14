import BaseDataType from "../../utilities/base_data_type";
import DevDeployCommandsCommandInteractionDataType from "./dev_deploy_commands_command_interaction_data_type";

async function devDeployCommandsCommandInteraction(baseDataType: BaseDataType): Promise<void> {
    const dataType = baseDataType as DevDeployCommandsCommandInteractionDataType;
    const interaction = dataType.interaction;
    // TODO: deploy commands (Need create 'RESTService')
    // const commands: RESTPostAPIApplicationCommandsJSONBody[] = [
    //     new SlashCommandBuilder()
    //       .setName("owner_healthcheck")
    //       .setDescription("Owner-only: check services health")
    //       .toJSON(),
    //     new SlashCommandBuilder()
    //       .setName("test_bracket")
    //       .setDescription("Create a test bracket with given size")
    //       .addIntegerOption(o =>
    //         o.setName("size")
    //           .setDescription("Number of participants")
    //           .setRequired(true)
    //           .setMinValue(2)
    //           .setMaxValue(32)
    //       ).toJSON(),
    // ];
    // await new REST({ version: "10" })
    //   .setToken(process.env.DISCORD_BOT_TOKEN ?? "")
    //   .put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID ?? ""),{ body: commands });
    await interaction.deferReply();
    await interaction.editReply("Deploy commands have been initiated. Global commands may take up to ~1 hour to roll out.");
}

export default devDeployCommandsCommandInteraction;