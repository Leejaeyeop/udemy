// t는 어찌됐든 객체여야 한다. -> extends
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge<{ a: string }, { b: number }>({ a: "1" }, { b: 2 });

// length propery를 가지고 있는 것으로 제한 하고 싶을때
interface Lengthy {
  length: number;
}

function countAndPDescribe<T extends Lengthy>(element: T): [T, string] {
  let text = "Got no value";

  if (element.length > 0) {
    text = "No";
  }
  return [element, text];
}
// keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// generic class
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItesm() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStore = new DataStorage<number>();

interface Goal {
  title: string;
  desc: string;
  date: Date;
}

let goal: Partial<Goal> = {};
goal.title = "t";
// goal.desc = "d"
goal.date = new Date();

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu")
// names.pop()
