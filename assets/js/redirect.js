document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour obtenir les paramètres de l'URL
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let match;
        while (match = regex.exec(queryString)) {
            params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
        }
        return params;
    }

    // Redirections configurées
    const redirections = {
        'youtube': 'https://youtube.com/@SkyExploreWasTaken?sub_confirmation=1', // Remplacez par l'URL de votre première page
        'twitch': 'https://twitch.tv/skyexplorewastaken', // Remplacez par l'URL de votre deuxième page
        'discord': 'https://dsc.gg/sewt-server',
        'github': 'https://github.com/SkyExploreWasTaken'
        // Ajoutez d'autres redirections ici si nécessaire
    };

    // Obtenez les paramètres de l'URL
    const queryParams = getQueryParams();

    // Vérifiez si le paramètre 'link' est présent et redirigez en conséquence avec un délai de 2 secondes
    if (queryParams.link && redirections[queryParams.link]) {
        const targetUrl = redirections[queryParams.link];
        
        // Modifier l'URL de l'élément "here"
        const hereElement = document.getElementById('here');
        hereElement.href = targetUrl;

        // Ajouter un événement de clic pour rediriger immédiatement si cliqué
        hereElement.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            window.location.href = targetUrl;
        });

        // Rediriger après un délai de 2 secondes
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 2000); // Délai de 2000 millisecondes = 2 secondes
    }
});
