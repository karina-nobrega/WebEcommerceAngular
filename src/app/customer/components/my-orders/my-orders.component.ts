import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {

  myOrders: any;

  constructor(
    private customeService: CustomerService,
  ) { }

  ngOnInit() {
    this.getMyOrders();
  }

  getMyOrders() {
    this.customeService.getOrdersByUserId().subscribe(res => {
      this.myOrders = res;
    })
  }

}
