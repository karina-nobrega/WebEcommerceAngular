import { AdminService } from './../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-product-faq',
  templateUrl: './post-product-faq.component.html',
  styleUrls: ['./post-product-faq.component.scss']
})

export class PostProductFaqComponent {

  productId: number = this.activatedroute.snapshot.params["productId"];
  FAQForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.FAQForm = this.fb.group({
      question: [null, [Validators.required]],
      answer: [null, [Validators.required]],
    })
  }

  postFAQ() {
    this.adminService.postFAQ(this.productId, this.FAQForm.value).subscribe(res => {
      if (res.id != null) {
        this.snackbar.open('FAQ postada com sucesso!', 'X', {
          duration: 5000
        });
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.snackbar.open("Algo deu errado!", 'X', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    })
  }

}
