const { SlashCommandBuilder } = require("discord.js");
const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function linkBuilder(){
    let link = "https://prnt.sc/";

    for(let i = 0; i < 6; i++){
        let x = getRandomArbitrary(0, characters.length-1);
        link = link + characters[x];
    }
    return link;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('printscreen')
		.setDescription('grabs a random screenshot from lightshot')
        .setContexts(0,1,2),

	async execute(interaction) {
		await interaction.reply(linkBuilder());
	},
};