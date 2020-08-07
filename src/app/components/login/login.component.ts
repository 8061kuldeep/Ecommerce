import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { invalid } from "@angular/compiler/src/render3/view/util";
import { PasswordModule } from "primeng/password";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [PasswordModule, MessageService]
})
export class LoginComponent implements OnInit {
  alertL: string;
  objn: any;
  current_user: object;
  hint: number = 0;
  message: string;
  obj: any;
  obju: any;
  citem: any;
  currentuitem: any;
  text: string;
  myform: FormGroup;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myform = this.builder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]]
    });
  }
  // save(severity: string) {
  //   this.messageService.add({
  //     severity: severity,
  //     summary: "Success",
  //     detail: "Data Saved"
  //   });
  // }
  logintest() {
    console.log(this.myform.value.email);
    // if (this.myform.value.email == "" && this.myform.value.pwd == "") {
    //   this.alertL = "enter something";
    // }
    if (this.myform.value.email != "" && this.myform.value.email != "") {
      this.objn = JSON.parse(localStorage.getItem("fdata"));

      for (let i = 0; i < this.objn.length; i++) {
        if (
          this.myform.value.email == this.objn[i].email &&
          this.myform.value.email == this.objn[i].pwd
        ) {
          this.current_user = {
            userid: this.objn[i].userid,
            emailL: this.myform.value.email,
            pasL: this.myform.value.pwd,
            fname: this.objn[i].fname,
            lname: this.objn[i].lname
          };

          localStorage.setItem("cuser", JSON.stringify(this.current_user));
          this.message = "successfully loged in";

          this.hint++;
          // this.obj = JSON.parse(localStorage.getItem("selecteditem"));
          // this.obju = JSON.parse(localStorage.getItem("cuser"));

          // let userId = this.obju.userid;
          // let Tmpcitem = this.obj.filter(function(value) {
          //   return value.userid == userId;
          // });
          // this.currentuitem = Tmpcitem;

          // localStorage.setItem(
          //   "cuselecteditem",
          //   JSON.stringify(this.currentuitem)
          // );

          // console.log("hellw");
          // this.messageService.add({
          //   severity: "success",
          //   summary: "succesfully loged in "
          // });
          this.router.navigate(["products"]);
        }
      }
    }
    if (this.hint == 0) {
      this.messageService.add({
        severity: "error",
        summary: "invalid user "
      });
    }
  }
}
