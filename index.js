const Discord = require('discord.js');
const client = new Discord.Client();
//const {token} = require('config.json')


client.login("NjY2OTQ3MTg4OTg2NzQwNzU2.XiCFzQ.2gAxxEne34MirwkHxb8xkFnjhXo")


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


  client.on('message', message => {
    // If the message is "ping"
    if (message.content.startsWith('!findthehomo')) {
      // Send "pong" to the same channel
      //message.channel.send('pong');

        // giphy.gifByID("ZGC27UvQJxXT37XzAh").then((response)=>{
        //     console.log(typeof(response));
            message.channel.send("finding homos....\n"+"one FAG FOUND as per "+message.member.displayName + "'s query",
            {
                files : ['https://media.giphy.com/media/ZGC27UvQJxXT37XzAh/giphy.gif']
            }
            );
         }
         //.catch(()=> {
        //     message.channel.send("error")
        // })

    })

