import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  id!: number;
  product: Product;
  quantityRange = [1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10];
  quantity: number = 1;
  
  constructor(private ProductService: ProductService, private CartService: CartService, private ActivatedRoute: ActivatedRoute, private Router: Router) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    };
  };

  ngOnInit(){
    this.ActivatedRoute.paramMap.subscribe(res => {
      this.id = Number(res.get('id'));
      if (isNaN(this.id)){
        this.Router.navigate(['']);
      }
    });
    this.ProductService.getProducts().subscribe(res => {
      this.product = res.find(i => {
        return this.id == i.id;
      }) as Product;
    });
  };

  addProduct(product: Product){
    alert("Added to cart!");
    const cart: Cart = {
      product: product, 
      quantity: this.quantity
    }
    this.CartService.addProduct(cart);
  }
};
