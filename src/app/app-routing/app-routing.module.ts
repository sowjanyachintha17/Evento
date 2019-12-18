import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent} from "../navbar/navbar.component";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EventregistrationComponent } from '../eventregistration/eventregistration.component';
import { CreateventComponent} from '../createvent/createvent.component'
import { EventoComponent } from '../frontpage/evento/evento.component';
import { RegisterComponent } from '../frontpage/register/register.component';
import { LoginComponent } from '../frontpage/login/login.component';
import { ListofusersComponent } from '../listofusers/listofusers.component';
import { ListofeventsComponent } from '../listofevents/listofevents.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { GetfeedbackComponent } from '../getfeedback/getfeedback.component';

const routes: Routes = [
  {
    path: '', 
    component: AppComponent,
    pathMatch: 'full'
  },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar',  component: NavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventregistration', component: EventregistrationComponent },
  { path: 'createvent',component: CreateventComponent },
  { path: 'evento',  component: EventoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listofusers', component: ListofusersComponent },
  { path: 'listofevents', component: ListofeventsComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'getfeedback', component: GetfeedbackComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
