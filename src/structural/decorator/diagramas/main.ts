import { TShirt } from './product/t-shirt';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { ProductCustomizedDecorator } from './product/product-customization-decorator';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const customizedTshirt = new ProductCustomizedDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
