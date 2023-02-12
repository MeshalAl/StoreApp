import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order = {
    customer: '',
    address: '',
    orderCart: [],
    total: 0
  };

  constructor() { }

  submitOrder(order: Order){
    this.order = order;
  }
  getOrder() {
    return this.order;
  }
}
