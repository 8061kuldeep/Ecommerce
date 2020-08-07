import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YRoutingModule } from "./y-routing.module";
import { HeadComponent } from "./head/head.component";

@NgModule({
  declarations: [HeadComponent],
  imports: [CommonModule, YRoutingModule]

})
export class YModule {}
