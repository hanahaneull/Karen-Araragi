const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.sendMessage(`:runner: Perjalananku membutuhkan waktu ${Date.now() - message.createdTimestamp} milidetik.`)
}

module.exports.help = {
    name : "ping"
}