const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDM4OTc5NTcyNDE1ODU2NjQw.DcMhIw.1kAr5FVRrd8RJ-Mh_yFTuX6_p7k);
