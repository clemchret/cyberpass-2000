//Toggle class thème sombre/clair
function setTheme () {
    const container = document.querySelector('.container');
    container.classList.toggle('day-mode');
    container.classList.toggle('night-mode');
};

document.getElementById('theme-button').addEventListener('click', setTheme);


//Génération de mot de passe
function generatePassword (e){
    e.preventDefault();

    //Récup des champs et vérifications des valeurs entrées ou non
    let password= '';
    let passwordLength = document.getElementById('passwordLength').value;

    //Si la case input est cochée, la variable prend une valeur correspondante, sinon elle est vide
    let numbers = ((document.getElementById('numbers').checked) ? '0123456789' : '');
    let letters = ((document.getElementById('letters').checked) ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' : '');
    let specialCharacters = ((document.getElementById('special').checked) ? '!@#$%^&*()' : '');

    //Addition des chaînes de caractères vide ou non afin d'éviter les mutliples conditions pour toutes les combinaisons de cases cochées
    let selectedCharacters = numbers+letters+specialCharacters;

    //Génération du mdp
    if(passwordLength === '' || selectedCharacters === ''){
        alert('Please select at least one option');
        return false;
    }else{
        for (let i = 0; i <= passwordLength-1; i++) {
            let randomNumber = Math.floor(Math.random() * selectedCharacters.length);
            password += selectedCharacters.substring(randomNumber, randomNumber +1);
           }
    
        document.getElementById('password').value = password;
        document.querySelector('.result').style.display = 'block';
    };
};

document.getElementById('generate-button').addEventListener('click', generatePassword);


//Copie presse-papier    
function copyClipboard() {
    let password = document.getElementById("password").value;
    navigator.clipboard.writeText(password);
    alert(`Password copied in clipboard`);
}

document.getElementById('copyClipboard').addEventListener('click', copyClipboard);


//Génération d'un numéro aléatoire de version. N'est-ce pas commme ça qu'ils font tous ? ;)
let randomVersion = ((Math.random()*10).toPrecision(4));
document.querySelector('.version').innerText = `V${randomVersion}`;