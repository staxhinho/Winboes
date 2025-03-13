const { app, BrowserWindow, globalShortcut } = require("electron");
const server = require("./api/load-json.js"); // Import the Express server

const PORT = 3000;

// Start Express server
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile("./public/pages/home.html");
    win.removeMenu();
    win.setTitle("Winboes");
    win.setMinimumSize(400, 300);
};

const shortcuts = () => {
    globalShortcut.register("F11", () => {
        win.setFullScreen(!win.isFullScreen());
    });

    globalShortcut.register("F10", () => {
        win.webContents.openDevTools();
    });
};

app.whenReady().then(() => {
    createWindow();
    shortcuts();
});
