const Datastore = require('nedb');
const path = require('path');
const { app, ipcMain } = require('electron');

function getStore() {
	const filePath = path.join(app.getPath('userData'), 'label');
	console.log(filePath);
	return new Datastore({
		filename: filePath,
		autoload: true
	});
}

function add(label) {
	return new Promise(function(resolve, reject) {
		const store = getStore();
		store.insert(label, function(err, doc) {
			resolve(doc);
		});
	});
}

function addBulk(labels) {
	return new Promise(function(resolve, reject) {
		const store = getStore();
		store.insert(label, function(err, doc) {
			resolve(doc);
		});
	});
}

module.exports = {
	add
}