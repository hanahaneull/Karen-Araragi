const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("Aku takbisa menghapus pesan yang kauinginkan. Maaf, ya ...")
    if(!args[0]) return message.channel.send("Aku takbisa menghapus pesan yang kauinginkan.")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`:ok_hand: Pesan sebanyak ${args[0]} telah Karen hapus!`).then(message => message.delete(5000));
    });
}

module.exports.help = {
    name : "hapus"
}