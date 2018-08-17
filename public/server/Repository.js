"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor(store) {
        this.store = store;
    }
    addMultiple(documents) {
        return Promise.all(documents.map(document => this.add(document)));
    }
    add(document) {
        return new Promise((resolve, reject) => {
            this.store.insert(document, (err, document) => {
                if (err) {
                    reject(err);
                }
                resolve(document);
            });
        });
    }
    removeAll() {
        return new Promise((resolve, reject) => {
            this.store.remove({}, { multi: true }, (err, numRemoved) => {
                if (err) {
                    reject(err);
                }
                resolve(numRemoved);
            });
        });
    }
}
exports.default = Repository;
