const icons = document.querySelectorAll('.desktop-icon');
const desktopGrid = document.getElementById('desktop-icons');
let draggedItem = null;

icons.forEach(icon => {
    // When dragging starts
    icon.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        setTimeout(() => e.target.style.opacity = '0.5', 0);
    });

    // When dragging ends
    icon.addEventListener('dragend', (e) => {
        setTimeout(() => e.target.style.opacity = '1', 0);
        draggedItem = null;
    });
});

// Enable dropping inside the grid

desktopGrid.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allows dropping
});

desktopGrid.addEventListener('drop', (e) => {
    e.preventDefault();

    if (draggedItem) {
        let x = e.clientX - desktopGrid.offsetLeft;
        let y = e.clientY - desktopGrid.offsetTop;

        // Calculate the closest grid position
        let gridX = Math.floor(x / 60) * 60;
        let gridY = Math.floor(y / 60) * 60;

        draggedItem.style.position = 'absolute';
        draggedItem.style.left = `${gridX}px`;
        draggedItem.style.top = `${gridY}px`;
    }
});
