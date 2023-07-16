document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");

    startButton.addEventListener("click", function() {
        fetch("/start-bot", { method: "POST" })
            .then(response => {
                if (response.ok) {
                    console.log("Le bot a été démarré avec succès !");
                } else {
                    console.error("Erreur lors du démarrage du bot.");
                }
            })
            .catch(error => {
                console.error("Une erreur s'est produite lors de la communication avec le serveur.", error);
            });
    });

    stopButton.addEventListener("click", function() {
        fetch("/stop-bot", { method: "POST" })
            .then(response => {
                if (response.ok) {
                    console.log("Le bot a été arrêté avec succès !");
                } else {
                    console.error("Erreur lors de l'arrêt du bot.");
                }
            })
            .catch(error => {
                console.error("Une erreur s'est produite lors de la communication avec le serveur.", error);
            });
    });
});
