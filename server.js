const express = require("express");
const Discord = require("discord.js");
const Client = require("discord.js")
const app = express();
const bot = new Client({
  intents: [
      Discord.GatewayIntentBits,
      Discord.GatewayIntentBits.Guilds,
      Discord.GatewayIntentBits.GuildMessages,
      Discord.GatewayIntentBits.MessageContent,
      Discord.GatewayIntentBits.DirectMessages,
      Discord.BitField.Flags
  ]
  
});
const token = "MTEwMjI1NTE0NTI1NDkzMjU2MQ.GtppOU.dTQ1H-_-vA1ZEweQOL49igJkui9-WORWyJP9Vg";

bot.on("ready", () => {
    console.log("Le bot Discord est prêt !");
    // Ajoutez ici la logique pour configurer et utiliser le client Discord (ex. événements, commandes, etc.)
});

app.use(express.static("public"));

app.post("/start-bot", (req, res) => {
    if (!bot.readyAt) {
        bot.login(token)
            .then(() => {
                res.sendStatus(200); // Répondre avec un statut HTTP 200 OK
            })
            .catch(error => {
                console.error("Erreur lors du démarrage du bot.", error);
                res.sendStatus(500); // Répondre avec un statut HTTP 500 Internal Server Error en cas d'erreur
            });
    } else {
        res.sendStatus(409); // Répondre avec un statut HTTP 409 Conflict si le bot est déjà démarré
    }
});

app.post("/stop-bot", (req, res) => {
    if (bot.readyAt) {
        bot.destroy()
            .then(() => {
                res.sendStatus(200); // Répondre avec un statut HTTP 200 OK
            })
            .catch(error => {
                console.error("Erreur lors de l'arrêt du bot.", error);
                res.sendStatus(500); // Répondre avec un statut HTTP 500 Internal Server Error en cas d'erreur
            });
    } else {
        res.sendStatus(404); // Répondre avec un statut HTTP 404 Not Found si le bot n'est pas démarré
    }
});

app.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur le port 3000");
});
