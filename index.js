const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

const token = "NjYzNDAyNzcxMDcxODkzNTE0.XlvMCQ.-oPGwGdD-JhXgdEYbVocq1hdJkA";

const PREFTX = '!';

var version = '1.0.1';

var length = 

bot.on('ready', () => {
    console.log('this bot is online!');
    bot.user.setActivity('with Flandre scarlet');
})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "chadt");
    if (!channel) return;

    channel.send(`Welcome to C.R.A.S.H.P.O.I.N.T., ${member}, please read <#581622932971716620>`)
});

bot.on('message', message => {

    let args = message.content.substring(PREFTX.length).split(" ");

    switch (args[0]) {
        case 'play':

            break;
    }
})

bot.on('message', message => {

    let args = message.content.substring(PREFTX.length).split(" ");

    switch (args[0]) {
        case 'ban':
            if (!args[1]) message.channel.send('who...(?)')

            const user = message.mentions.users.first();

            if (user) {
                const member = member.guild.member(user);

                if (member) {
                    member.ban().then(() => {
                        message.reply(`Sucessfully banned ${user.tag}`)
                    }).catch(err => {
                        message.reply('I was unable to ban the member')
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in this guild")
                }
            } else {
                message.reply('that user isn\'t in the guild');
            }
            
            break;
    } 
    
    

});

bot.on('message', message => {

    let args = message.content.substring(PREFTX.length).split(" ");

    switch (args[0]) {
        case 'kick':
            if (!args[1]) message.channel.send('who...(?)')

            const user = message.mentions.users.first();

            if (user) {
                const member = member.guild.member(user);

                if (member) {
                    member.kick().then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`)
                    }).catch(err => {
                        message.reply('I was unable to kick the member')
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in this guild")
                }
            } else {
                message.reply('that user isn\t in the guild');
            }
            
            break;
    } 
    
    

});

bot.on('message', message=>{

    let args = message.content.substring(PREFTX.length).split(" ");

    switch(args[0]){
        case 'userinfo':
            const embed = new Discord.RichEmbed()
            .setTitle('User info')
            .addField('username', message.author.username, true)
            .setColor(message.member.displayHexColor)
            .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed); 
        break;
            
    }
})

bot.on('message', message => {
    let args = message.content.substring(PREFTX.length).split(" ");

    switch(args[0]) {
        case 'mute':
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return message.reply("couldn't find that member");

            let mainrole = message.guild.roles.find(role => role.name === "member");
            let muterole = message.guild.roles.find(role => role.name === "muted");

            if(!muterole) return message.reply("couldn't find the mute tole");

            let time = args[2]

            if(time){
                return message.reply("who.....(?)")
            }

            person.removeRole(mainrole.id);
            person.addRole(muterole.id);

            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);
            
            setTimeout(function(){
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`@${person.user.tag} now has been unmuted :::)))`)
  
            }, ms(time));




        break;
    }
})

bot.login(token);
