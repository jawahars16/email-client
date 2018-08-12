const { ipcRenderer, ipcMain } = window.require('electron');

export function ipcSendToElectron(channel, data, timeout = 5000) {
	return new Promise(function(resolve, reject) {
		ipcRenderer.send(channel, data);
		ipcRenderer.on(`${channel}-ack`, function(response) {
			resolve(response);
		});
		setTimeout(function() {
			reject('Timeout');
		}, timeout);
	});
}

