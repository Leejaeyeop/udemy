let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateNever(erroCode: string): never {
  throw { erroCode };
}