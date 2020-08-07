import {
  Component,
  ViewChild,
  OnInit,
  Input,
  AfterViewInit
} from "@angular/core";
import { HeaderComponent } from "./../header/header.component";
@Component({
  selector: "app-minicart",
  templateUrl: "./minicart.component.html",
  styleUrls: ["./minicart.component.scss"]
})
export class MinicartComponent implements OnInit {
  // @Input() myinput: string;
  // @Input() message: string;
  // @Input() quant: number;
  // obj: any;
  // l: number = JSON.parse(localStorage.getItem("cuselecteditem")).length;

  // constructor() {}
  // @ViewChild(HeaderComponent) header;

  ngOnInit(): void {
    // this.message = this.header.message;
    //  this.obj = JSON.parse(localStorage.getItem("cuselecteditem"));
    //   this.l = this.obj.length;
    //   console.log("dddddd" + this.l);
  }
}
