// enum
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR = 10,
}

const person: {
  name: string;
  age: number;
  // turple
  hobbies: [number, string];
  role: Role;
} = {
  name: "lee",
  age: 30,
  // turple
  hobbies: [2, "author"],
  role: Role.ADMIN,
};

console.log(person.name);
