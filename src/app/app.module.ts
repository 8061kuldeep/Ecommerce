import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ToastModule } from "primeng/toast";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./components/login/login.component";
import { SigninComponent } from "./components/signin/signin.component";
import { ProductsComponent } from "./components/products/products.component";
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { GosafeGuard } from "./gosafe.guard";
import { SafeGuard } from "./safe.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentModule } from "./student/student.module";
import { AutoCompleteModule } from "primeng/autocomplete";
import { UserService } from "./user.service";
import { MinicartComponent } from "./components/minicart/minicart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SplitButtonModule } from "primeng/splitbutton";
import { ConfirmDialogModule } from "primeng/confirmdialog";

import { StudentdeskComponent } from "./studentdesk/studentdesk.component";
import { HeaderModule } from "./components/header/header.module";

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SigninComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    MinicartComponent,
    StudentdeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentModule,
    AutoCompleteModule,
    HeaderModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule,
    SplitButtonModule,
    ConfirmDialogModule
  ],

  providers: [GosafeGuard, SafeGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
