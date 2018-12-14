const Discord = require('discord.js');

const client = new Discord.Client();

client.on("message", (message) => {


    /// DREAM


   if (message.content.startsWith("-new")) { /// DREAM


        const reason = message.content.split(" ").slice(1).join(" "); /// DREAM


        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);


        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`); /// ALPHA CODES


        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {


            let role = message.guild.roles.find("name", "Support Team");


            let role2 = message.guild.roles.find("name", "@everyone");


            c.overwritePermissions(role, {


                SEND_MESSAGES: true,


                READ_MESSAGES: true


            }); /// ALPHA CODES


            c.overwritePermissions(role2, {


                SEND_MESSAGES: false,


                READ_MESSAGES: false


            });


            c.overwritePermissions(message.author, {


                SEND_MESSAGES: true,


                READ_MESSAGES: true


            });


            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);


            const embed = new Discord.RichEmbed()


                .setColor(0xCF40FA)


                .addField(`Hey ${message.author.username}!`, `تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك`)


                .setTimestamp();


            c.send({


                embed: embed


            });


        }).catch(console.error);


    }






  if (message.content.startsWith("-close")) {


        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);




       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب -confirm`)


           .then((m) => {


               message.channel.awaitMessages(response => response.content === '-confirm', {


                       max: 1,


                       time: 20000,


                       errors: ['time'],


                   }) /// DREAM


                   .then((collected) => {


                       message.channel.delete();


                   }) /// DREAM


                   .catch(() => {


                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {


                           m2.delete();


                       }, 3000);


                   });


           });


   }




});


 


  var prefix = "w";


var adminprefix = "-";


const developers = ["323888904602124299","503918316663078922"]


client.on('message', message => {


    var argresult = message.content.split(` `).slice(1).join(' ');


      if (!developers.includes(message.author.id)) return;




  if (message.content.startsWith(adminprefix + 'setg')) {


    client.user.setGame(argresult);


      message.channel.send(`**تم تغيير حالتك الى** **${argresult}**`)


  } else 


     if (message.content === (adminprefix + "leave")) {


    message.guild.leave(); 


  } else 


  if (message.content.startsWith(adminprefix + 'setw')) {


  client.user.setActivity(argresult, {type:'WATCHING'});


      message.channel.send(`**تم تغيير الواتشنق الى** **${argresult}**`)


  } else 


  if (message.content.startsWith(adminprefix + 'setl')) {


  client.user.setActivity(argresult , {type:'LISTENING'});


      message.channel.send(`**تم تغير اللستنق الى ** **${argresult}**`)


  } else 


  if (message.content.startsWith(adminprefix + 'sets')) {


    client.user.setGame(argresult, "https://www.twitch.tv/dream");


      message.channel.send(`**تم تغيير الستريمنق الى** **${argresult}**`)


  }


  if (message.content.startsWith(adminprefix + 'setname')) {


  client.user.setUsername(argresult).then


      message.channel.send(`**تم تغيير اسمك الى ** ..**${argresult}** `)


} else


if (message.content.startsWith(adminprefix + 'setava')) {


  client.user.setAvatar(argresult);


    message.channel.send(`**تم تغيير صورتك الى**:**${argresult}** `);


}


});      
        


           





 
 







  





client.login(process.env.BOT_TOKEN);
