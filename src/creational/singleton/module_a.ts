// import { MyDatabaseClassic } from "./db/my-database-classic";

// import { MyDatabaseModule } from "./db/my-database-modules";

import { MyDatabaseFunction } from "./db/my-database-function";

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// const myDatabaseClassic = MyDatabaseClassic.instance;

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Kevem Lima A', age: 25 });
myDatabaseClassic.add({ name: 'Vitor Emmanuel A', age: 19 });
myDatabaseClassic.add({ name: 'Miguel Alexandre A', age: 5 });

export { myDatabaseClassic };
