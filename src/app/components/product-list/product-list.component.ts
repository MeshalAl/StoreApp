import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private ProductService: ProductService, private CartService: CartService) {};

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(res => { 
      this.products = res;
    } )
  }

  productAdded(cart: Cart){
    this.CartService.addProduct(cart);
  }
}
