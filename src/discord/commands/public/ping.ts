import { createCommand } from "#base";
import { ApplicationCommandType } from "discord.js";

createCommand({
	name: "ping",
	description: "Replies with pong 🏓",
	type: ApplicationCommandType.ChatInput,
	async run(interaction){
		await interaction.reply({
			flags: ["Ephemeral"], 
			content: `Pong 🏓`,
		});
	}
});