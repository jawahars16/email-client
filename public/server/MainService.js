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
const Repository_1 = require("./Repository");
class MainService {
    constructor(context) {
        this.labelRepository = new Repository_1.default(context.labels);
        this.threadRepository = new Repository_1.default(context.threads);
    }
    ResetLabels(labels) {
        return __awaiter(this, void 0, void 0, function* () {
            const labelsRemoved = yield this.labelRepository.removeAll();
            const result = yield this.labelRepository.addMultiple(labels);
            return { labelsRemoved, result };
        });
    }
    AddThreads(threads) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.threadRepository.addMultiple(threads);
        });
    }
}
exports.default = MainService;
