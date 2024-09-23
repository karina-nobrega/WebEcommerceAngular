import { CouponsComponent } from './admin/components/coupons/coupons.component';
import { PostCouponComponent } from './admin/components/post-coupon/post-coupon.component';
import { CartComponent } from './customer/components/dashboard/cart/cart.component';
import { RouterModule } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostCategoryComponent } from './admin/components/post-category/post-category.component';
import { PostProductComponent } from './admin/components/post-product/post-product.component';
import { DashboardComponent } from './customer/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PostCategoryComponent,
    PostProductComponent,
    PostCouponComponent,
    DashboardComponent,
    CartComponent,
    CouponsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }


