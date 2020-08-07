import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  newForm: FormGroup;
  constructor(private router: Router, private builder: FormBuilder) {}
  error: string;
  obj: object[];
  storage: object[];

  ngOnInit(): void {
    this.newForm = this.builder.group({
      fname: ["", [Validators.required]],
      lname: ["", [Validators.required]],
      pwd: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  check(fname, lname, email, pwd) {
    console.log(this.newForm.value);

    this.obj = [];
    this.storage = JSON.parse(localStorage.getItem("fdata"));
    if (this.storage) {
      this.obj = this.storage;
    }

    this.obj = [
      ...this.obj,
      {
        userid: Math.floor(Math.random() * 100),
        fname: this.newForm.value.fname,
        lname: this.newForm.value.lname,
        email: this.newForm.value.email,
        pwd: this.newForm.value.email
      }
    ];
    localStorage.setItem("fdata", JSON.stringify(this.obj));
    this.router.navigate(["login"]);
  }
}
