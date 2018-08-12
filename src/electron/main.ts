import { app, BrowserWindow, ipcMain } from 'electron';
import App from './server/App';

let mainWindow;

async function createWindow() {

	try {
		
		let app = new App(4000);
		let url = await app.initiaize();
		console.log(`App listening at ${url}`);

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
