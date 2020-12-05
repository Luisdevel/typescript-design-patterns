import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luis', age: 25 });
myDatabaseClassic.add({ name: 'João', age: 25 });
myDatabaseClassic.add({ name: 'Maria', age: 25 });
myDatabaseClassic.show();

export { myDatabaseClassic };
