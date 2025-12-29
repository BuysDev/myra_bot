import { createCommand } from "#base";
import { ChatInput } from "../../config/index.js";

createCommand({
	name: "ping",
	description: "Retorna a latência do bot.",
	type: ChatInput,
	async run(interaction){
		await interaction.reply({
			content: `Olá, ${interaction.user}. Estou com \`${interaction.client.ws.ping}\`ms de latência! 🏓`
		});
	}
});