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

    let numbers = '';
    if(document.getElementById('numbers').checked){
        numbers = '0123456789';
    }

    let letters = '';
    if(document.getElementById('letters').checked){
        letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    let specialCharacters = '';
    if(document.getElementById('special').checked){
        specialCharacters = '!@#$%^&*()';
    }

    let selectedCharacters = numbers+letters+specialCharacters;

    //Génération du mdp
    if(passwordLength === '' || selectedCharacters === ''){
        alert('Invalid');
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


//Copie press-papier    
function copyClipboard() {
    let password = document.getElementById("password").value;
    navigator.clipboard.writeText(password);
    alert(`${password} copied`);
}

document.getElementById('copyClipboard').addEventListener('click', copyClipboard);