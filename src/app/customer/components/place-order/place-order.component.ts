import { CustomerService } from './../../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {

  orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    public dialog: MatDialog
  ){}
  
  ngOnInit(){
    this.orderForm = this.fb.group({
      address: [null, [Validators.required]],
      orderDescription: [null],
    })
  }

  placeOrder(){
    this.customerService.placeOrder(this.orderForm.value).subscribe(res => {
      if (res.id != null) {
        this.snackbar.open("Pedido feito com sucesso!", "X", { duration: 5000 })
        this.router.navigateByUrl("/customer/my-orders");
        this.closeForm();

      }else{
        this.snackbar.open("Algo deu errado!", "X", { duration: 5000 })
      }
    })
  }

  closeForm(){
    this.dialog.closeAll();
  }

}
