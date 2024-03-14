function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creationg person object");
  }
}

// const pers = new Person();
// console.log(pers);
