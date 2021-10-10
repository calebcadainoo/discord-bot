require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { BOT_TOKEN } = process.env;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('Discord bot on duty...');
});

client.login(BOT_TOKEN);
