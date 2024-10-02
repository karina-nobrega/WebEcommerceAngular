import { ViewWishlistComponent } from './customer/components/view-wishlist/view-wishlist.component';
import { ViewProductDetailComponent } from './customer/components/view-product-detail/view-product-detail.component';
import { ReviewOrderedProductComponent } from './customer/components/review-ordered-product/review-ordered-product.component';
import { UpdateProductComponent } from './admin/components/update-product/update-product.component';
import { MyOrdersComponent } from './customer/components/my-orders/my-orders.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { PlaceOrderComponent } from './customer/components/place-order/place-order.component';
import { CouponsComponent } from './admin/components/coupons/coupons.component';
import { PostCouponComponent } from './admin/components/post-coupon/post-coupon.component';
import { CartComponent } from './customer/components/cart/cart.component';
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
import { PostProductFaqComponent } from './admin/components/post-product-faq/post-product-faq.component';

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
    CouponsComponent,
    PlaceOrderComponent,
    OrdersComponent,
    MyOrdersComponent,
    PostProductFaqComponent,
    UpdateProductComponent,
    ReviewOrderedProductComponent,
    ViewProductDetailComponent,
    ViewWishlistComponent

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


