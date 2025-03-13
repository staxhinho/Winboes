const wallpaperImg = document.getElementById('wallpaper');
const wallpaperFolder = '../images/wallpapers/';
const filePath = 'wallpapers.json'; // Only the filename, not the full path

let wallpapers = []; // Initialize an empty array to store the wallpapers

fetch(`http://localhost:3000/api/json?path=${encodeURIComponent(filePath)}`)
  .then(response => response.json())
  .then(data => {
    wallpapers = data; // Store the wallpapers from the fetched JSON
    updateWallpaper(); // Ensure the first wallpaper is loaded initially
  })
  .catch(error => console.error('Error fetching JSON:', error));

let currentIndex = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        leftKey();
    } else if (event.key === "ArrowRight") {
        rightKey();
    }
});

function leftKey() {
    if (currentIndex > 0) {
        currentIndex--; // Decrease index when left arrow is pressed
    } else {
        currentIndex = wallpapers.length - 1; // Loop to the last wallpaper if at the beginning
    }
    updateWallpaper(); // Update the wallpaper when the left key is pressed
}

function rightKey() {
    if (currentIndex < wallpapers.length - 1) {
        currentIndex++; // Increase index when right arrow is pressed
    } else {
        currentIndex = 0; // Loop to the first wallpaper if at the end
    }
    updateWallpaper(); // Update the wallpaper when the right key is pressed
}

function updateWallpaper() {
    // Ensure there are wallpapers to display
    if (wallpapers.length > 0) {
        const wallpaper = wallpapers[currentIndex]; // Get the wallpaper at the currentIndex
        wallpaperImg.src = wallpaper.src; // Set the image source to the wallpaper src
        console.log("Wallpaper changed to:", wallpaperImg.src);
    }
}
