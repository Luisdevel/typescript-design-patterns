import { OrderApproved } from './order-approved';
import { OrderReject } from './order-reject';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shpping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderReject(this.order));
  }

  waitPayment(): void {
    console.log('O pedido já está no estado pagamento pendente.');
  }

  shipOrder(): void {
    console.log('O pedido não pode ser enviado para pagamento pendente.');
  }
}
