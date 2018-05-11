const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Aku takbisa menghapus pesan yang kauinginkan. Maaf, ya ...");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Aku takbisa menemukan user itu.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Tolong beritahu secara lengkap role yang ingin kauberikan!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Aku tak menemukan role tersebut.");

    if(!rMember.roles.has(gRole.id)) return message.reply("Mereka tidak mempunyai role tersebut.");
    await(rMember.removeRole(gRole.id));

    try {
        rMember.send(`Maaf, role ${gRole.name} kami hapus.`)
    }
    catch(e) {
        message.channel.send(`Maaf, role ${gRole.name} dari <@${rMember.id}> sudah kami hapus. Tapi, saat kami mencoba mengirim pesan intim, mereka menguncinya.`)
    }
}

module.exports.help = {
    name : "removerole"
}