const { app, BrowserWindow, globalShortcut } = require("electron");

const createWindow = () => {
    

    const win = new BrowserWindow({
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

    globalShortcut.register("F11", () => {
        win.setFullScreen(!win.isFullScreen());
    });
};

app.whenReady().then(() => {
    createWindow();
});