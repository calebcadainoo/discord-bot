require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { BOT_TOKEN } = process.env;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('Discord bot on duty...');

  // console.log('CLIENT: ', client);
});

client.on('messageCreate', (msg) => {
  console.log('msg: ', msg);
  if (msg.content === 'ping') {
    // msg.channel.send('Not tagged');
    msg.reply('ooo you touched me...HAHA');
  }
});

client.login(BOT_TOKEN);
