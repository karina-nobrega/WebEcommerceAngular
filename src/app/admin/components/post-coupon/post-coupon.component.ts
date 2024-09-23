import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-coupon',

  templateUrl: './post-coupon.component.html',
  styleUrls: ['./post-coupon.component.scss']
})

export class PostCouponComponent {

  couponForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.couponForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      discount: [null, [Validators.required]],
      expirationDate: [null, [Validators.required]],
    })
  }

  addCoupon() {
    if (this.couponForm.valid) {
      this.adminService.addCoupon(this.couponForm.value).subscribe(res => {
        if (res.id != null) {
          this.snackBar.open('Cupom adicionado com Sucesso!', 'X', {
            duration: 5000
          });
          this.router.navigateByUrl('/api/admin/dashboard');
        } else {
          this.snackBar.open(res.message, 'Fechar', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      })
    } else {
      this.couponForm.markAllAsTouched();
    }
  }

}
