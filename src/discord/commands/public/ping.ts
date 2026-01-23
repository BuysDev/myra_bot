import { createCommand } from "#base";
import { ChatInput } from "../../settings/index.js";

createCommand({
	name: "ping",
	description: "Retorna a latência do bot.",
	type: ChatInput,
	async run(interaction){
		const { ping } = interaction.client.ws;

		await interaction.reply({
			content: `Olá, ${interaction.user}. Estou com \`${ping}\`ms de latência! 🏓`
		});
	}
});