import { Component, OnInit, Input } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
  providers: [MessageService, ConfirmationService]
})
export class CartComponent implements OnInit {
  cartitem: any;
  newobj: { productid: any; name: any; price: any; quantity: any };
  hint: any = 1;
  totalprice: number;
  price: any;
  quant: any;
  obj: any;
  obju: any;
  currentuitem: any;
  storage: any;
  @Input() myinput: string = "i am your chiled";
  data: any;
  c: any;
  productId: any;
  cuid: any;
  demo: any;
  test: any;

  constructor(
    private router: Router,
    private msgservice: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.obj = JSON.parse(localStorage.getItem("selecteditem"));
    this.obju = JSON.parse(localStorage.getItem("cuser"));

    let userId = this.obju.userid;
    let Tmpcitem = this.obj.filter(function(value) {
      return value.userid == userId;
    });
    this.currentuitem = Tmpcitem;

    localStorage.setItem("cuselecteditem", JSON.stringify(this.currentuitem));
  }
  confirm(index) {
    this.confirmationService.confirm({
      message: "Are you sure that you want to perform this action?",
      accept: () => {
        this.msgservice.add({
          severity: "success",
          summary: "successfully deleted"
        });
        this.cartitem = JSON.parse(localStorage.getItem("cuselecteditem"));
        console.log(this.cartitem);
        let productId = this.cartitem[index].productid;
        let cuid = JSON.parse(localStorage.getItem("cuser")).userid;
        console.log(cuid);
        console.log(productId);

        let demo = this.obj.find(function(value) {
          return value.productid == productId && value.userid == cuid;
        });
        this.test = demo;

        console.log("demo", this.test);
        console.log(this.obj.indexOf(this.test));
        this.cartitem.splice(index, 1);
        this.obj.splice(this.obj.indexOf(this.test), 1);
        localStorage.setItem("cuselecteditem", JSON.stringify(this.cartitem));
        localStorage.setItem("selecteditem", JSON.stringify(this.obj));
      }
    });
  }

  ngOnInit(): void {
    this.storage = JSON.parse(localStorage.getItem("cuselecteditem"));
    if (this.storage) {
      this.cartitem = this.storage;
    }
    // this.cartitem = JSON.parse(localStorage.getItem("cuselecteditem"));
    // this.cartitem.sort(function(a, b) {
    //   return a.productid - b.productid;
    // });
  }

  quntup(index) {
    console.log("i am product id" + this.cartitem[index].productid);
    this.hint++;
    // this.newobj = {

    //   productid: this.cartitem[index].productid,
    //   name: this.cartitem[index].name,
    //   price: this.cartitem[index].price,
    //   quantity: this.cartitem[index].quantity + 1
    // };
    // this.cartitem.splice(index, 1);
    // this.cartitem = [...this.cartitem, this.newobj];
    this.cartitem[index].quantity = this.cartitem[index].quantity + 1;

    localStorage.setItem("cuselecteditem", JSON.stringify(this.cartitem));
    let productId = this.cartitem[index].productid;
    let cuid = JSON.parse(localStorage.getItem("cuser")).userid;
    console.log(cuid);
    console.log(productId);

    let demo = this.obj.find(function(value) {
      return value.productid == productId && value.userid == cuid;
    });
    this.test = demo;

    console.log("demo", this.test);
    console.log(this.obj.indexOf(this.test));
    this.obj[this.obj.indexOf(this.test)].quantity =
      this.obj[this.obj.indexOf(this.test)].quantity + 1;
    localStorage.setItem("selecteditem", JSON.stringify(this.obj));
  }
  quntdown(index) {
    if (this.cartitem[index].quantity > 1) {
      this.cartitem[index].quantity = this.cartitem[index].quantity - 1;
      localStorage.setItem("cuselecteditem", JSON.stringify(this.cartitem));
      let productId = this.cartitem[index].productid;
      let cuid = JSON.parse(localStorage.getItem("cuser")).userid;
      console.log(cuid);
      console.log(productId);

      let demo = this.obj.find(function(value) {
        return value.productid == productId && value.userid == cuid;
      });
      this.test = demo;

      console.log("demo", this.test);
      console.log(this.obj.indexOf(this.test));
      this.obj[this.obj.indexOf(this.test)].quantity =
        this.obj[this.obj.indexOf(this.test)].quantity - 1;
      localStorage.setItem("selecteditem", JSON.stringify(this.obj));
    }
  }
 

  checkout() {
    this.router.navigate(["checkout"]);
  }
}
