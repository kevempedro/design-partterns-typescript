// import { MyDatabaseClassic } from "./db/my-database-classic";

import { MyDatabaseModule } from "./db/my-database-modules";

import { MyDatabaseFunction } from "./db/my-database-function";

import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';
// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// const myDatabaseClassic = MyDatabaseClassic.instance;

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Kevem Lima B', age: 25 });
myDatabaseClassic.add({ name: 'Vitor Emmanuel B', age: 19 });
myDatabaseClassic.add({ name: 'Miguel Alexandre B', age: 5 });

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
