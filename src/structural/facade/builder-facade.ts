import { MainDishBuilder } from '../../creational/builder/class/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/class/vegan-dish-builder';

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuild = new VeganDishBuilder();

  makeMeal(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
  }

  makeMeal3(): void {
    const veganMeal = this.veganDishBuild.makeMeal().getMeal();
    console.log(veganMeal);
    console.log(veganMeal.getPrice());
  }
}
