import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
//import { CategoryListComponent } from './categories/category-list/category-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ReturnManagementComponent } from './returns/return-management.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  //{ path: 'categories', component: CategoryListComponent },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'returns', component: ReturnManagementComponent, canActivate: [AuthGuard] }, // Protected route
  { path: '**', redirectTo: '/products' }, // Wildcard route for 404
];