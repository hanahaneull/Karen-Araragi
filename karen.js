const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() == ("js"));
    if(jsfiles.length <= 0) {
        console.log("Komando telah dimuat!");
        return;
    }

    console.log(`${jsfiles.length} berkas telah dimuat.`);
    jsfiles.forEach((f, i) =>{
        let props = require(`./commands/${f}`);

        bot.commands.set(props.help.name, props);
    });
})

bot.on("ready", async() => {
    console.log(`${bot.user.username} sudah daring di ${bot.guilds.size} server dengan ${bot.users.size} pengguna.`);
    console.log(`v0.0.6 | Initial Release`);
    bot.user.setActivity("v0.0.6 - Initial Release | Ketik k.bantuan untuk bantuan.", {type: "PLAYING"});
});

bot.on("message", async message =>{
    if(message.author.bot) return; // Karen takkan merespon jika yang memberi perintahnya adalah Bot.
    if(message.channel.type === "dm") 
    return message.channel.send("Saat ini, Karen takbisa membalas lewat pesan intim. Maaf, ya ..."); // Karen takkan merespon jika yang memberi perintahnya lewat Pesan Intim (PM).

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" "); // Komando bisa dijalankan walau ada spasi.
    let cmd = messageArray[0]. toLowerCase();
    let args = messageArray.slice(1);

    let cmds = bot.commands.get(cmd.slice(prefix.length));

    if(cmds) cmds.run(bot, message, args);

});

bot.login(tokenfile.token);