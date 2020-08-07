import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { JsonPipe } from "@angular/common";
import { ThrowStmt } from "@angular/compiler";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  productobj: string;
  current_user: any;
  qunt: number;
  text: string;
  currentuitem: any;
  obj: any;
  obju: any;
  l: any = 0;
  cuser: any;
  name: any;
  constructor(private router: Router, public service: UserService) {}
  products: any;
  sproduct: any;
  storage: any;
  btn: string = "add to cart";

  brother = "i am your brother";
  // @Output() bromsg: EventEmitter<string> = new EventEmitter();
  // sendata() {
  //   this.bromsg.emit(this.brother);
  //   console.log(this.bromsg);
  //   console.log(this.bromsg);
  // }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem("cuselecteditem"))) {
      this.obj = JSON.parse(localStorage.getItem("cuselecteditem"));
      for (let index = 0; index < this.obj.length; index++) {
        this.l += this.obj[index].quantity;
      }

      // console.log(this.cuser.fname);
      if (JSON.parse(localStorage.getItem("cuser"))) {
        this.name = JSON.parse(localStorage.getItem("cuser")).fname;
        console.log("i am in side loop");
      }
    }

    // this.sendata();
    console.log("helow");
    this.products = [
      {
        productid: 11,
        name: "Mobile",
        price: 10000,
        img: "assets/mobile.jpeg",
        status: false
      },
      {
        productid: 22,
        name: "Laptop ",
        price: 20000,
        img: "assets/lap.jpeg",
        status: false
      },
      {
        productid: 33,
        name: "WashingMachine",
        price: 30000,
        img: "assets/wmachine.jpeg",
        status: false
      },
      {
        productid: 44,
        name: "Earphones",
        price: 40000,
        img: "assets/earphone.jpeg",
        status: false
      },
      { productid: 55, name: "TV", price: 50000, img: "assets/tv.jpg" },
      {
        productid: 66,
        name: "Headphones",
        price: 60000,
        img: "assets/headphone.jpg",
        status: false
      }
    ];
    this.productobj = JSON.stringify(this.products);
    localStorage.setItem("pdata", this.productobj);
  }

  carttest(value, ind) {
    this.current_user = JSON.parse(localStorage.getItem("cuser"));
    if (JSON.parse(localStorage.getItem("cuser"))) {
      this.sproduct = [];
      this.storage = JSON.parse(localStorage.getItem("selecteditem"));
      // console.log(this.storage[ind].productid);
      if (this.storage) {
        this.sproduct = this.storage;
      }
      // this.current_user = JSON.parse(localStorage.getItem("cuser"));
      console.log(value);
      // this.router.navigate(["cart"]);
      console.log(ind.name);
      this.qunt = 1;
      this.sproduct = [
        ...this.sproduct,
        {
          userid: this.current_user.userid,
          productid: ind.productid,
          name: ind.name,
          price: ind.price,
          quantity: this.qunt
        }
      ];
      console.log(this.sproduct);

      console.log(ind.name);
      localStorage.setItem("selecteditem", JSON.stringify(this.sproduct));

      this.obj = JSON.parse(localStorage.getItem("selecteditem"));
      this.obju = JSON.parse(localStorage.getItem("cuser"));

      let userId = this.obju.userid;
      let Tmpcitem = this.obj.filter(function(value) {
        return value.userid == userId;
      });
      this.currentuitem = Tmpcitem;
      // this.inputmsg = this.currentuitem;

      localStorage.setItem("cuselecteditem", JSON.stringify(this.currentuitem));
    } else {
      alert("login first");
    }

    if (JSON.parse(localStorage.getItem("cuselecteditem"))) {
      this.l++;
    }
    ind.status = true;
  }
}
