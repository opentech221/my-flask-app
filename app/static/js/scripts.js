document.addEventListener('DOMContentLoaded', function() {
    // Charger les scripts externes
    const scripts = [
        "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
        "https://cd</link>n.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"
    ];

    scripts.forEach(function(src) {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Pour s'assurer que les scripts sont exécutés dans l'ordre
        document.head.appendChild(script);
    });

    // Code JavaScript pour gérer les interactions utilisateur
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Bouton cliqué!');
        });
    }

    // Code pour la navbar Bootstrap
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
});