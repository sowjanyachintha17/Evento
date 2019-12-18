import { Component, OnInit } from '@angular/core';
import { UserService } from 'evento_frontend/src/app/user.service';
import { Router } from '@angular/router';
import { Event } from '../../event';
import { Register } from 'src/app/register';
@Component({
  selector: 'app-evntregistration',
  templateUrl: './evntregistration.component.html',
  styleUrls: ['./evntregistration.component.css']
})
export class EvntregistrationComponent implements OnInit {

  posts: Register;
  event: Event = new Event();
  submitted= false;

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }
  save() {
    this.userService.postEvent(this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


}
