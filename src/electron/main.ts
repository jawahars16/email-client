import { app, BrowserWindow, ipcMain } from 'electron';
import App from './server/App';

let mainWindow;

async function createWindow() {

	try {
		
		const server = new App(5000, app.getPath('userData'));
		const url = await server.initiaize();
		console.log(`Server listening at ${url}`);

		mainWindow = new BrowserWindow({ width: 900, height: 600 });
		const startUrl = 'http://localhost:3000';
		mainWindow.loadURL(startUrl);

	} catch (error) {
		console.error(error);
	}
}

function subscribe(channel, callback) {
	ipcMain.on(channel, function(event, args) {
		callback(args).then(response =>
			mainWindow.webContents.send(`${channel}-ack`, response)
		);
	});
}

app.on('ready', createWindow);
