import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shpping-order-state';

export class OrderReject implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log(
      'O pagamento não pode ser aprovado porque o pedido foi recusado.',
    );
  }

  rejectPayment(): void {
    console.log(
      'O pagamento não pode ser recusado porque o pedido já está recusado.',
    );
  }

  waitPayment(): void {
    console.log(
      'O pagamento não pode ficar pendente porque o pedido foi recusado.',
    );
  }

  shipOrder(): void {
    console.log('Não posso enviar um pedido com o pagamento recsado.');
  }
}
