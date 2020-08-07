import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SigninComponent } from "./components/signin/signin.component";
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ProductsComponent } from "./components/products/products.component";
import { GosafeGuard } from "./gosafe.guard";
import { SafeGuard } from "./safe.guard";

const routes: Routes = [
  { path: "", component: ProductsComponent },
  {
    path: "login",
    canActivate: [SafeGuard],
    component: LoginComponent
  },
  { path: "signin", component: SigninComponent },
  { path: "cart", canActivate: [GosafeGuard], component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "products", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
