//npm install discord.js
//npm install dotenv

const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
require('dotenv').config();


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(process.env.TOKEN);
