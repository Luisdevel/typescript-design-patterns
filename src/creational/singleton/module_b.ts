import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Martelo', age: 25 });
myDatabaseClassic.add({ name: 'Prego', age: 25 });
myDatabaseClassic.add({ name: 'Porca', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
