import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  // Método usado quando o buyer é chamado
  // addSeller(...sellers: Seller[]): void {
  //   sellers.forEach((seller) => this.sellers.push(seller));
  // }

  // Método usado quando o buyer não é chamado
  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log(
          'Aqui está o(s) produto(s) que você irá comprar:',
          product.id,
          product.name,
          product.price,
        );
        return;
      }
    }

    console.log('Não encontrei nenhum produto com id', id);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
