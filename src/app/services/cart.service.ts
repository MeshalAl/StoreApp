import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Cart[] = [];
  constructor() { };

  addProduct(cart: Cart){
    if (this.cartProducts.length < 1){
      this.cartProducts.push(cart);
    } else {
      let status = this.checkProductExists(cart);
      
      if (!status) {
        this.cartProducts.push(cart);
      }
    }
  }

  checkProductExists(cart: Cart){
    let status = false;
    this.cartProducts.forEach( (product) => {
      if (cart.product.id == product.product.id) {
        product.quantity += cart.quantity;
        status = true;
      }
    })
    return status;
  }
  getCartProducts(){
    return this.cartProducts;
  }
}
