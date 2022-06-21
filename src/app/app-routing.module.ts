import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';



const routes: Routes = [
  {path:'tourinfo',component: TourinfoComponent},
  {path:'tourinfo-edit',component:TourinfoEditComponent },
  { path: 'addtour', component: AddTourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
