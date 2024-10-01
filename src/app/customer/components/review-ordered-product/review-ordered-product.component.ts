import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-review-ordered-product',
  templateUrl: './review-ordered-product.component.html',
  styleUrls: ['./review-ordered-product.component.scss']
})

export class ReviewOrderedProductComponent {

  productId: number = this.activatedRoute.snapshot.params["productId"];
  reviewForm!: FormGroup;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }
}
