import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  cartProducts: Cart[] = [];

  constructor(private CartService: CartService) {};

  ngOnInit(){
    this.cartProducts = this.CartService.getCartProducts();
  }

  
}
