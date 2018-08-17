"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore = require("nedb");
const path = require("path");
class DataContext {
    constructor(basePath) {
        this.labels = this.createStore(basePath, 'labels');
        this.threads = this.createStore(basePath, 'threads');
    }
    createStore(basePath, table) {
        return new Datastore({
            filename: path.join(basePath, table),
            autoload: true
        });
    }
}
exports.default = DataContext;
