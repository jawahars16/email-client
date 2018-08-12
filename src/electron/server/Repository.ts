import Datastore = require('nedb');
import { app } from 'electron';
import path = require('path');

const basePath = app.getPath('userData');

export default class Repository<T> {
	entity: Datastore;

	constructor(table) {
        this.entity = new Datastore({
            filename: path.join(basePath, table),
		    autoload: true
        });
    }

    public addMultiple(documents : T[]) : Promise<T[]> {
        return Promise.all(documents.map(document => this.add(document)));
    }

    public add(document : T) : Promise<T> {
        return new Promise((resolve, reject) => {
            this.entity.insert(document, (err, document) => {
                if(err){
                    reject(err);
                }
                resolve(document);
            })
        });
    }

    removeAll() : Promise<Number>{
        return new Promise((resolve, reject) => {
            this.entity.remove({}, {multi: true}, (err, numRemoved) => {
                if(err){
                    reject(err);
                }
                resolve(numRemoved);
            });
        });
    }
}
