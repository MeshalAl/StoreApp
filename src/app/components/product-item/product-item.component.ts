import { Component, Input, Output, EventEmitter} from '@angular/core'
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;
  quantityRange = [1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10];
  quantity: number = 1;
  @Output() productAdded = new EventEmitter();
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  addProduct(product: Product){
    alert("Added to cart!");
    const cart: Cart = {
      product: product, 
      quantity: this.quantity
    }
    this.productAdded.emit(cart);
  }
}