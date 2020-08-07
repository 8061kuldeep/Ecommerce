import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
import { StudentlistComponent } from "./studentlist/studentlist.component";

import { StudentdeskComponent } from "./studentdesk/studentdesk.component";

import { AppModule } from "../app.module";
import { HeadComponent } from "../y/head/head.component";
import { HeaderModule } from "../components/header/header.module";

@NgModule({
  declarations: [StudentlistComponent, StudentdeskComponent],
  imports: [CommonModule, StudentRoutingModule, HeaderModule]
})
export class StudentModule {}
