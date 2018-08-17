import { Label, Thread } from "./Model";
import Datastore = require('nedb');
import Repository from './Repository';
import path = require('path');

class DataContext {
    labels: Datastore;
    threads: Datastore;

    constructor(basePath){
        this.labels = this.createStore(basePath, 'labels');
        this.threads = this.createStore(basePath, 'threads');
    }

    createStore(basePath, table){
        return new Datastore({
            filename: path.join(basePath, table),
		    autoload: true
        });
    }
}

export default DataContext;