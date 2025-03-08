const { SlashCommandBuilder } = require("discord.js");



module.exports = {
	data: new SlashCommandBuilder()
		.setName('name')
		.setDescription('TELL YOU WHAT HE NAME IS BRAH')
        .setContexts(0,1,2),

	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/776841941995487292/905552091743916052/My_name_is_Jeff.mp4?ex=67cca69b&is=67cb551b&hm=e19fde955134e48d4149fae7a8fd3a408d76eb5be2aa0b1e6036991ff0102ee4&');
	},
};