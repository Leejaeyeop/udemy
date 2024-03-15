function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.param1;
    }
  };
}

@WithTemplate(`<h1>My Person Object</h1>`, "app")
class Person {
  name = "Max";
  param1 = "this is Person Param";

  constructor() {
    console.log("Creationg person object");
  }
}

// const pers = new Person();
// console.log(pers);
