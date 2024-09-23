import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './../../../services/customer.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  [x: string]: any;

  cartItems: any[] = [];
  order: any;

  couponForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.couponForm = this.fb.group({
      code: [null, [Validators.required]]
    })
    this.getCart();
  }

  applyCoupon() {
    this.customerService.applyCoupon(this.couponForm.get(['code'])!.value).subscribe(res => {
      this.snackbar.open("Cupom aplicado com Sucesso", "X", {
        duration: 5000
      });
      this.getCart();
    }, error => {
      this.snackbar.open(error.error, 'X', {
        duration: 5000
      });
    });
  }

  getCart() {
    this.cartItems = [];
    this.customerService.getCartByUserId().subscribe(res => {
      this.order = res;
      res.cartItems.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.cartItems.push(element);
      });
    })
  }

  increaseQuantity(productId: any) {
    this.customerService.increaseProductQuantity(productId).subscribe(res => {
      this.snackbar.open('Quantidade de produto aumentada', 'X', { duration: 5000 });
      this.getCart();
    })
  }

  decreaseQuantity(productId: any) {
    this.customerService.decreaseProductQuantity(productId).subscribe(res => {
      this.snackbar.open('Quantidade de produto reduzida', 'X', { duration: 5000 });
      this.getCart();
    })
  }
}
