import { MyDataStructure } from './my-data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('ROUBADOS:', a, b);
console.log();

for (const data of dataStructure) {
  console.log(data);
}
console.log();

for (const data of dataStructure) {
  console.log(data);
}
console.log();
