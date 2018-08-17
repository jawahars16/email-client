import Datastore = require('nedb');

export default class Repository<T> {
	store: Datastore;

	constructor(store: Datastore) {
		this.store = store;
	}

	public get(query): Promise<T[]> {
		return new Promise((resolve, reject) => {
			this.store.find(query, (error, documents: T[]) => {
				if (error) reject(error);
				else resolve(documents);
			});
		});
	}

	public addMultiple(documents: T[]): Promise<T[]> {
		return Promise.all(documents.map(document => this.add(document)));
	}

	public add(document: T): Promise<T> {
		return new Promise((resolve, reject) => {
			this.store.insert(document, (err, document) => {
				if (err) {
					reject(err);
				}
				resolve(document);
			});
		});
	}

	removeAll(): Promise<Number> {
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
