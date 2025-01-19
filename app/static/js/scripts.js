document.addEventListener('DOMContentLoaded', function() {
    // Code JavaScript pour gérer les interactions utilisateur
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Bouton cliqué!');
        });
    }
});