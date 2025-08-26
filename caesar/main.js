document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cipherButton').addEventListener('click', function() {
        const shift = parseInt(document.getElementById('shift').value);
        const inputText = document.getElementById('inputText').value;
        const resultElement = document.getElementById('result');

        // Fonction pour chiffrer le texte avec le chiffre de César
        function caesarCipher(text, shift) {
            return text.replace(/[a-z]/gi, function(char) {
                // Déterminer le code ASCII de base (A ou a)
                const base = char <= 'Z' ? 65 : 97;
                // Calculer le nouveau caractère avec le décalage
                const shiftedCharCode = ((char.charCodeAt(0) - base + shift) % 26) + base;
                return String.fromCharCode(shiftedCharCode);
            });
        }

        // Appliquer le chiffrement et afficher le résultat
        resultElement.textContent = caesarCipher(inputText, shift);
    });

    // Déclencher le chiffrement au chargement pour montrer l'exemple
    document.getElementById('cipherButton').click();
});