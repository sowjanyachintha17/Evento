import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
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
import { EvntregistrationComponent } from './frontpage/evntregistration/evntregistration.component';
import { GmapComponent } from './frontpage/gmap/gmap.component';


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
    EvntregistrationComponent,
    GmapComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
