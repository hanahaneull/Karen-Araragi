const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Sebentar, aku mengambil fotomu sebentar, ya!");
    let target = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
        {
            name : "avatar.png",
            attachment : target.displayAvatarURL
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name : "avatar"
}