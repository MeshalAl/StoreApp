import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { Router } from '@angular/router';
import { core } from '@angular/compiler';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  customer: string = '';
  total: number = 0;

  constructor(private OrderService: OrderService, private router: Router) {}
  
  ngOnInit(): void {
    const order = this.OrderService.getOrder();
    this.customer = order.customer;
    this.total = order.total;

    if (order.total == 0){
      this.router.navigate(['/'])
    }
  }
  
}
