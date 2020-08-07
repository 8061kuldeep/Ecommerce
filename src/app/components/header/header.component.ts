import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public service: UserService) {
    if (JSON.parse(localStorage.getItem("cuser"))) {
      this.btn = "logout";
    } else {
      this.btn = "login";
    }
  }
  btn: string = "login";
  @Input() myinput: string;
  // @Input() message = "Hola Mundo!";
  // @Output() myoutput: EventEmitter<string> = new EventEmitter();
  // outputmsg = "i am your chiled";
  // sendmsg() {
  //   this.myoutput.emit(this.outputmsg);
  // }
  ngOnInit(): void {
    // this.sendmsg();
  }
  logout() {
    if (confirm("are you sure")) {
      localStorage.removeItem("cuser");
      localStorage.removeItem("cuselecteditem");
    }
  }
}
