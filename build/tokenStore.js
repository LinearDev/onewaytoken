"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkKey = exports.use = exports.set = void 0;
class Store {
    items = [];
    set(key) {
        this.items.push(key);
    }
    checkKey(key) {
        return this.items.includes(key);
    }
    use(key) {
        if (this.checkKey(key)) {
            const index = this.items.indexOf(key);
            this.items.splice(index, 1);
            return { error: false, message: "OnewayToken: Key used" };
        }
        return { error: true, message: "OnewayToken: Key not exist" };
    }
}
const store = new Store();
const set = (key) => { return store.set(key); };
exports.set = set;
const use = (key) => { return store.use(key); };
exports.use = use;
const checkKey = (key) => { return store.checkKey(key); };
exports.checkKey = checkKey;
