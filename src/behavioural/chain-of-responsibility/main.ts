import { CEOBudgetHandle } from './ceo-budget-handle';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandle } from './director-budget-handle';
import { ManagerBudgetHandle } from './manager-budget-handler';
import { SellerBudgetHandle } from './seller-budget-handler';

const customerBudget = new CustomerBudget(1001);

const seller = new SellerBudgetHandle();
seller
  .setNextHandler(new ManagerBudgetHandle())
  .setNextHandler(new DirectorBudgetHandle())
  .setNextHandler(new CEOBudgetHandle());

seller.handle(customerBudget);
console.log(customerBudget);
