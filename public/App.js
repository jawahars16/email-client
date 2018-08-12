"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainService_1 = require("./MainService");
const DataContext_1 = require("./DataContext");
const MainController_1 = require("./MainController");
class App {
    constructor(port) {
        this.port = port;
    }
    initiaize() {
        return new Promise((resolve, reject) => {
            let express = require('express');
            let app = express();
            let mainService = new MainService_1.default(DataContext_1.default.labels);
            let controller = new MainController_1.default(mainService);
            app.post('/labels/reset', controller.ResetLabels);
            let server = app.listen(this.port, () => {
                var host = server.address().address;
                var port = server.address().port;
                resolve(`http://${host}:${port}`);
            });
        });
    }
}
exports.default = App;
