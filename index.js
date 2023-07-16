const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const { time, timeLog } = require('console');
const {Client, GatewayIntentBits, args, userMention, User, UserManager, message, messageContent, MessageCollector, ClientUser, TeamMember, DMChannel, chatInputApplicationCommandMention, MessageManager, GuildMember, GuildMemberFlags, GuildMemberManager, GuildManager} = require('discord.js');
const { Permissions } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ]
    
})
const prefix = "?"

client.on("messageCreate", message =>{
    if (message.author.bot) return;
   if (message.content.indexOf(prefix) !== 0) return;
    //?ping
    if (message.content === prefix + "ping"){
        message.reply("pong!");
    }

    //?help
    if (message.content === prefix + "help"){
        message.reply("Les commandes présentes dans ce bot sont : \n-\t ?help : obtient les noms de toutes les commandes (commande utilisée). \n-\t ?ping : te répond avec pong. \n-\t ?help2 : t'envoie la liste des commandes en mp. \n-\t ?roll : génére un nombre entre 0 et 100.\n-\t ?embed : envoie un message enboitée dans le salon.\n-\t ?embed2 : envoie un message enboitée en message privée.\n-\t ?blague : Envoie une blague au hasard parmi les blagues du bot.");     
    }
    if (message.content === prefix + "help2"){
    message.author.send("Voici la liste des commandes :\n-\t?help. \n-\t?help2(commande utilisée).\n-\t?ping.\n-\t?roll.\n-\t?embed.\n-\t?embed2.\n-\t?blague.")
    }
    if(message.content === prefix + "roll")   
    {
         var result = Math.floor((Math.random() * 100) + 1)
        message.reply("Le nombre au hasard est " + result)
    }
    if(message.content === prefix + "blague") {
        const responses = ["Que dit une noisette quand elle tombe dans l'eau? \nJe me noix", "Quel est le comble d'un boulanger? \n C'est d'avoir plus de pain sur la planche", "Comment est-ce que les abeilles communiquent entre elles ? \n Par -miel.", "Qu'est-ce qu'une frite enceinte ?\n Une patate sautée.", "Quel est l'arbre préféré du chômeur ? \nLe bouleau.", "Que dit une mère à son fils geek quand le dîner est servi ?\n Alt Tab !", "Qu'est-ce qui est pire qu'un bébé dans une poubelle ? \nUn bébé dans deux poubelles.", "Les bonnes mamans te laissent lécher le batteur… \nLes meilleures mamans l'éteignent d'abord.", "Qu'est-ce qui est mieux que gagner une médaille d'or aux Jeux Paralympiques ? \nMarcher."];
        var result = Math.floor(Math.random()*responses.length);
        message.reply("La blague est la suivante : " + responses[result])
    }

    if(message.content === prefix + "embed") {
        const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Shoot Bot')
	.setURL('https://discord.com/channels/1118998963018805348/1126609848549769257')
	.setAuthor({ name: 'Team-bot', iconURL: 'https://discord.bots.gg/img/logo_transparent_coloured.png', url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiN5ob28vr_AhWTTaQEHVQFBJQQwqsBegQIDhAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU&opi=89978449' })
	.setDescription('This is my bot')
	.setThumbnail('https://wallpapers.com/images/featured/minecraft-s2kxfahyg30sob8q.jpg')
	.addFields(
		{ name: 'Shoot bot', value: 'Bot created by Gtx#9543' },
        { name: 'Collaborator', value: 'Road : road#4500'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Created the', value: '30/04/2023', inline: true },
		{ name: 'Updated the', value: '06/07/2023', inline: true },
	)
	.addFields({ name: 'Lived during', value: '2 months and 7 days', inline: true })
	.setImage('https://i.ytimg.com/vi/E8ZGtig5cnA/maxresdefault.jpg')
	.setTimestamp()
	.setFooter({ text: 'Shoot-Team', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

message.reply({ embeds: [exampleEmbed] });
    }
    if(message.content === prefix + "embed2") {
        const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Shoot Bot')
	.setURL('https://discord.com/channels/1118998963018805348/1126609848549769257')
	.setAuthor({ name: 'Team-bot', iconURL: 'https://discord.bots.gg/img/logo_transparent_coloured.png', url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiN5ob28vr_AhWTTaQEHVQFBJQQwqsBegQIDhAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU&opi=89978449' })
	.setDescription('This is my bot')
	.setThumbnail('https://wallpapers.com/images/featured/minecraft-s2kxfahyg30sob8q.jpg')
	.addFields(
		{ name: 'Shoot bot', value: 'Bot created by Gtx#9543' },
        { name: 'Collaborator', value: 'Road : road#4500'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Created the', value: '30/04/2023', inline: true },
		{ name: 'Updated the', value: '06/07/2023', inline: true },
	)
	.addFields({ name: 'Lived during', value: '2 months and 10 days', inline: true })
	.setImage('https://i.ytimg.com/vi/E8ZGtig5cnA/maxresdefault.jpg')
	.setTimestamp()
	.setFooter({ text: 'Shoot-Team', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    message.author.send({ embeds: [exampleEmbed] })
    }
        const kick = require("./kick.js")
        module.exports = (client, message) => {
            if(message.content == prefix + "kick") {
                return kick(message)
            }
        }
        const clear1 = require('./clear.js')
        module.exports = (client, message) => {
            if(message.content === prefix + "clear") {
                return clear1(message)
            }
        }
        

}
    
);


client.once('ready', () =>{ 
    var current = new Date();
    username = client.user.tag;
    console.log("%cLe " + "%cbot" + "%c s'est lancée sous le nom de %c" + username +' %cen%c ' + current.getSeconds() + 's' +" %cet le %c" + current.toLocaleDateString() + " %cà %c" + current.toLocaleTimeString() ,'color: black', 'color:red', 'color:black', 'color: gold', 'color: black', 'color : gold', 'color: black', 'color: gold', 'color: black', 'color: gold');
});
client.login("MTEwMjI1NTE0NTI1NDkzMjU2MQ.GtppOU.dTQ1H-_-vA1ZEweQOL49igJkui9-WORWyJP9Vg")
