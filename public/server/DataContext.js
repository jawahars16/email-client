"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
class DataContext {
    constructor() {
        this.labels = new Repository_1.default('labels');
    }
}
let context = new DataContext();
exports.default = context;
