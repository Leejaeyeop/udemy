interface Greetable {
  name?: string;
  opt?: string;
  func(): void;
}

interface Func {
  (a: number, b: number): number;
}

class Person implements Greetable {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  func() {}
}

let person: Greetable;
person = new Person("Max");

let func: Func;
func = (a: number, b: number) => {
  return a + b;
};
