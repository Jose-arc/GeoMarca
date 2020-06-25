const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        minWidth: 600,
        minHeight: 600,
        maxWidth: 600,
        maxHeight: 600,
        maximizable: false,
        backgroundColor: '#fffff',
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    )

    //Quitar menu header de .exe
    win.removeMenu();

    win.on('closed', function() {
        win = null
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', function() {

    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if (win === null) {
        createWindow()
    }
})