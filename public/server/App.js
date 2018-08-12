"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainService_1 = require("./MainService");
const DataContext_1 = require("./DataContext");
const MainController_1 = require("./MainController");
const bodyParser = require('body-parser');
class App {
    constructor(port) {
        this.port = port;
    }
    initiaize() {
        return new Promise((resolve, reject) => {
            let express = require('express');
            let app = express();
            app.use(bodyParser.json());
            app.use(bodyParser.raw({ type: () => true }));
            let mainService = new MainService_1.default(DataContext_1.default.labels);
            let controller = new MainController_1.default(mainService);
            app.post('/labels/reset', controller.ResetLabels);
            app.get('/labels', (req, res) => console.log('test'));
            let server = app.listen(this.port, () => {
                let host = server.address().address;
                let port = server.address().port;
                resolve(`server http://${host}:${port}`);
            });
        });
    }
}
exports.default = App;
