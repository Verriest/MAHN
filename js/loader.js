document.addEventListener('DOMContentLoaded', function() {
    try {
        window.addEventListener('load', function() {
            try {
                // Cache le loader avec un effet de fondu
                var loader = document.querySelector('.loader');
                if (loader) {
                    loader.style.transition = 'opacity 0.5s ease-out';
                    loader.style.opacity = '0';

                    // Après la transition, cache le loader et affiche le contenu principal
                    loader.addEventListener('transitionend', function() {
                        try {
                            loader.style.display = 'none';

                            var mainContent = document.getElementById('main-content');
                            if (mainContent) {
                                mainContent.style.display = 'block';
                                mainContent.style.opacity = '0';

                                // Affiche le contenu principal avec un effet de fondu
                                setTimeout(function() {
                                    try {
                                        mainContent.style.transition = 'opacity 0.5s ease-in';
                                        mainContent.style.opacity = '1';
                                    } catch (innerError) {
                                        console.error('Erreur lors de la transition de l\'opacité du contenu principal :', innerError);
                                    }
                                }, 50);
                            } else {
                                console.error('Élément avec l\'ID "main-content" introuvable.');
                            }
                        } catch (innerError) {
                            console.error('Erreur lors de la gestion de la fin de transition du loader :', innerError);
                        }
                    });
                } else {
                    console.error('Élément avec la classe "loader" introuvable.');
                }
            } catch (innerError) {
                console.error('Erreur lors de l\'ajout de l\'événement load :', innerError);
            }
        });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'événement DOMContentLoaded :', error);
    }
});