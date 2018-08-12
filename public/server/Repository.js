"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore = require("nedb");
const electron_1 = require("electron");
const path = require("path");
const basePath = electron_1.app.getPath('userData');
class Repository {
    constructor(table) {
        this.entity = new Datastore({
            filename: path.join(basePath, table),
            autoload: true
        });
    }
    addMultiple(documents) {
        return Promise.all(documents.map(document => this.add(document)));
    }
    add(document) {
        return new Promise((resolve, reject) => {
            this.entity.insert(document, (err, document) => {
                if (err) {
                    reject(err);
                }
                resolve(document);
            });
        });
    }
    removeAll() {
        return new Promise((resolve, reject) => {
            this.entity.remove({}, { multi: true }, (err, numRemoved) => {
                if (err) {
                    reject(err);
                }
                resolve(numRemoved);
            });
        });
    }
}
exports.default = Repository;
