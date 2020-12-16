import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luis', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '80A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '80A', 'Av Paraguai', 'MT');

console.log();
console.log(factory.getLocations());
