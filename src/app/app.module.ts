import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
//import { RegisterComponent } from './register/register.component';




  

@NgModule({
  declarations: [
    AppComponent,
    EditTourInformationSystemComponent,
    CustomerComponent,
    //RegisterComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent,
    TourinfoComponent,
    TourinfoEditComponent,
    AddTourComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
