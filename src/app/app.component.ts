import { Component } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    // console.log(this.childmsg1);
  }
  title = "Ecommerce";

  // childmsg: any;
  // childmsg1: any;
  // getmsg(value) {
  //   this.childmsg = value;
  // }
  // getdata(value) {
  //   this.childmsg1 = value;
  //   console.log("getdata is working");
  // }
  // inputmsg = this.childmsg;
}
