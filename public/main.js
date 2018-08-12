"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const App_1 = require("./server/App");
let mainWindow;
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let app = new App_1.default(4000);
            let url = yield app.initiaize();
            console.log(`App listening at ${url}`);
            mainWindow = new electron_1.BrowserWindow({ width: 900, height: 600 });
            const startUrl = 'http://localhost:3000';
            mainWindow.loadURL(startUrl);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function subscribe(channel, callback) {
    electron_1.ipcMain.on(channel, function (event, args) {
        callback(args).then(response => mainWindow.webContents.send(`${channel}-ack`, response));
    });
}
electron_1.app.on('ready', createWindow);
