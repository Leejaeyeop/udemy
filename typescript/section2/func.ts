function add(n1: number, n2: number) {
  return n1 + n2;
}

// let func: Function;
let func: (n1: number, n2: number) => number;

func = add;

add(1, 2);
