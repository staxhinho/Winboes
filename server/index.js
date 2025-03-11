const { app, BrowserWindow, globalShortcut } = require("electron");

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
    //Toggle Fullscreen
    globalShortcut.register("F11", () => {
        win.setFullScreen(!win.isFullScreen());
    });

    //Open DevTools
    globalShortcut.register("F10", () => {
        win.webContents.openDevTools();
    });
}

app.whenReady().then(() => {
    createWindow();
    shortcuts();
});