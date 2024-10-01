import { ReviewOrderedProductComponent } from './components/review-ordered-product/review-ordered-product.component';
import { ViewOrderedProductsComponent } from './components/view-ordered-products/view-ordered-products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my_orders', component: MyOrdersComponent },
  { path: 'ordered_products/:orderId', component: ViewOrderedProductsComponent },
  { path: 'review/:orderId', component: ReviewOrderedProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
