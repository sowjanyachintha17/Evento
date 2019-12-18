import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router' 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router) { }

  spot(){
    this._router.navigate(['/eventregistration']);
  }

  clickEvent(){
    this._router.navigate(['/createvent']);
  }

  ngOnInit() {
  }

}
