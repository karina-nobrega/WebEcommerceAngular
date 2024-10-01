import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from './../../service/admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: any;

  constructor(
    private adminService: AdminService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getPlaceOrders();
  }

  getPlaceOrders() {
    this.adminService.getPlaceOrders().subscribe(res => {
      this.orders = res;
    })
  }

  changeOrderStatus(orderId: number, status: string) {
    this.adminService.changeOrderStatus(orderId, status).subscribe(res => {
      if (res.id != null) {
        this.snackbar.open("Status do pedido alterado com sucesso!", "X", { duration: 5000 });
        this.getPlaceOrders();
      } else {
        this.snackbar.open("Algo de errado aconteceu!", "X", { duration: 5000 });
      }
    })
  }

}
