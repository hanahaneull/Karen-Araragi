const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let tomute = message.guild.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.channel.send("Takbisa mencari user tersebut.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sial! Dia ini memang mulut besar.");
    let muterole = message.guild.roles.find(`name`, "Muted");
    // Ini momen di mana Karen akan membuat role Muted.
    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "RANDOM",
                permissions: []
            })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermission(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
         });
        }
        catch(e) {
            console.log(e.stack);
        }
    }    // Karen sudah membuat role Muted tersebut.

    let mutetime = args[1];
    if(!mutetime) return message.reply("Kamu tidak menyebut waktuku untuk menutup mulutnya!");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> sudah kututup mulutnya selama <@${tomute.ms}>.`);
    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> sudah kuberi pelajaran.`);
    }, ms(mutetime));
}

module.exports.help = {
name : "mute"
}