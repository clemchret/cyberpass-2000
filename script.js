function setTheme () {
    const container = document.querySelector('.container');
    container.classList.toggle('day-mode');
    container.classList.toggle('night-mode');
};

document.getElementById('theme-button').addEventListener('click', setTheme);