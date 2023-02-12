import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  cartProducts: Cart[] = [];
  total: number = 0;

  constructor(private CartService: CartService, private OrderService: OrderService, private router: Router) {};

  ngOnInit(){
    this.cartProducts = this.CartService.getCartProducts();
    this.calculateTotal();
  }

  changedQuantity(event: any, i: number) {
    if(event == 0){
      this.cartProducts = this.CartService.removedFromCart(i);
      this.calculateTotal();
      alert("Removed from cart!");
    } else {
      this.cartProducts[i].quantity = event;
      this.calculateTotal();
    }

  }

  calculateTotal() {
    this.total = 0
    this.cartProducts.forEach( (i) => {
      this.total += i.quantity * i.product.price;
    })
    this.total = Number(this.total.toFixed(2));
  }

  submit(form: any) {
    const order: Order = {
      customer: form.value.name,
      address: form.value.address,
      total: this.total,
      orderCart: this.cartProducts
    };
    
    this.OrderService.submitOrder(order);
    this.router.navigate(['confirmation']);
    this.CartService.clearCart();
  }
}
