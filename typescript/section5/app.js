"use strict";
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    func() { }
}
let person;
person = new Person("Max");
let func;
func = (a, b) => {
    return a + b;
};
