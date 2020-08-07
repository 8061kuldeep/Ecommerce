import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
  providers: [InputTextModule, MessageService]
})
export class CheckoutComponent implements OnInit {
  checkoutobj: any;
  sum: number = 0;
  myform: FormGroup;

  constructor(
    private builder: FormBuilder,
    private input: InputTextModule,
    private messageService: MessageService
  ) {
    this.checkoutobj = JSON.parse(localStorage.getItem("cuselecteditem"));
    this.total();
  }

  ngOnInit(): void {
    this.myform = this.builder.group({
      address: ["", [Validators.required]],
      Pincode: ["", [Validators.required]],
      checkbox: ["", [Validators.required]]
    });
  }
  done() {
    this.messageService.add({
      severity: "success",
      summary: "successfully submited "
    });
  }
  total() {
    for (let i = 0; i < this.checkoutobj.length; i++) {
      this.sum =
        this.sum + this.checkoutobj[i].quantity * this.checkoutobj[i].price;
    }
  }
}
