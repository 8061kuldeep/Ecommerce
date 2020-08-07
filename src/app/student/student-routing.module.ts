import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentlistComponent } from "./studentlist/studentlist.component";
import { StudentdeskComponent } from "./studentdesk/studentdesk.component";

const routes: Routes = [
  { path: "list", component: StudentlistComponent },
  { path: "desk", component: StudentdeskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
