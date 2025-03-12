const startMenu = document.getElementById('start-menu');
const taskbar = document.getElementById('taskbar');
let isOpen = false;

startMenu.style.bottom = `${taskbar.offsetHeight}px`;

function openStartMenu() {
    if (!isOpen) {
        startMenu.style.display = 'block';
        isOpen = true;
    } else if (isOpen) {
        startMenu.style.display = 'none';
        isOpen = false;
    }
    
};