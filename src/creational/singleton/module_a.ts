import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Luis', age: 25 });
myDatabaseClassic.add({ name: 'João', age: 25 });
myDatabaseClassic.add({ name: 'Maria', age: 25 });
myDatabaseClassic.show();

export { myDatabaseClassic };
