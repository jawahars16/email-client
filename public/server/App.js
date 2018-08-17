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
const MainService_1 = require("./MainService");
const DataContext_1 = require("./DataContext");
const bodyParser = require('body-parser');
class App {
    constructor(port, databasePath) {
        this.port = port;
        this.databasePath = databasePath;
        console.log(this.databasePath);
    }
    initiaize() {
        return new Promise((resolve, reject) => {
            let express = require('express');
            let app = express();
            app.use(bodyParser.json());
            app.use(bodyParser.raw({ type: () => true }));
            app.use((req, res, next) => {
                console.log(`${req.url} - ${req.method} - ${JSON.stringify(req.body)}`);
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });
            const context = new DataContext_1.default(this.databasePath);
            const mainService = new MainService_1.default(context);
            app.post('/labels', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const result = yield mainService.ResetLabels(req.body);
                res.send(result);
            }));
            app.post('/threads', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const result = yield mainService.AddThreads(req.body);
                res.send(result);
            }));
            let server = app.listen(this.port, () => {
                let host = server.address().address;
                let port = server.address().port;
                resolve(`server http://${host}:${port}`);
            });
        });
    }
}
exports.default = App;
