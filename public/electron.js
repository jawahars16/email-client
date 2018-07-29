const { app, BrowserWindow } = require('electron');

function createWindow() {
	win = new BrowserWindow({ width: 900, height: 600 });
	const startUrl = "http://localhost:3000";
	win.loadURL(startUrl);
}

app.on('ready', createWindow);
