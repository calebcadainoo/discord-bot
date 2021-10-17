require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const { BOT_TOKEN } = process.env;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('Discord bot on duty...');

  // console.log('CLIENT: ', client);
});

client.on('messageCreate', (msg) => {
  // console.log('msg: ', msg.content);
  if (msg.content === 'pop') {
    // msg.channel.send('Not tagged');
    msg.reply('ooo you touched me...HAHA');
  }
});

client.login(BOT_TOKEN);
