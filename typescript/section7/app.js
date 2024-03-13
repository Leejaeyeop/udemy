"use strict";
// t는 어찌됐든 객체여야 한다. -> extends
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ a: "1" }, { b: 2 });
function countAndPDescribe(element) {
    let text = "Got no value";
    if (element.length > 0) {
        text = "No";
    }
    return [element, text];
}
// keyof
function extractAndConvert(obj, key) {
    return obj[key];
}
// generic class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItesm() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
const numberStore = new DataStorage();
let goal = {};
goal.title = "t";
// goal.desc = "d"
goal.date = new Date();
const names = ["Max", "Anna"];
// names.push("Manu")
// names.pop()
