import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { CreateventComponent } from './createvent/createvent.component';
import { FormsModule } from '@angular/forms';
import { EventoComponent } from './frontpage/evento/evento.component';
import { RegisterComponent } from './frontpage/register/register.component';
import { LoginComponent } from './frontpage/login/login.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { ListofeventsComponent } from './listofevents/listofevents.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FeedbackComponent } from './feedback/feedback.component';
import { GetfeedbackComponent } from './getfeedback/getfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    EventregistrationComponent,
    CreateventComponent,
    EventoComponent,
    RegisterComponent,
    LoginComponent,
    ListofusersComponent,
    ListofeventsComponent,
    AttendanceComponent,
    FeedbackComponent,
    GetfeedbackComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
