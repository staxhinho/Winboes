const startMenu = document.getElementById('start-menu');
const taskbar = document.getElementById('taskbar');
const windowsButton = document.getElementById('win-icon');
let isOpen = false;

startMenu.style.bottom = `${taskbar.offsetHeight}px`;

function openStartMenu() {
    if (!isOpen) {
        startMenu.style.display = 'flex';
        isOpen = true;
    } else if (isOpen) {
        startMenu.style.display = 'none';
        isOpen = false;
    }
    
};

windowsButton.addEventListener('mouseover', function() {
    windowsButton.src = '../images/icons/system/windows-blue.svg'
});

windowsButton.addEventListener('mouseout', function() {
    windowsButton.src = '../images/icons/system/windows.svg'
});