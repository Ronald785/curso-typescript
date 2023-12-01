import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Ronald", age: 22 });
myDatabaseClassic.add({ name: "Maria", age: 50 });
myDatabaseClassic.add({ name: "Eduardo", age: 25 });

export { myDatabaseClassic };
