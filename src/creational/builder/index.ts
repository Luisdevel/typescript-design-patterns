import { MainDishBuilder } from './class/main-dish-builder';
import { VeganDishBuilder } from './class/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuild = new VeganDishBuilder();
const veganMeal = veganDishBuild.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
