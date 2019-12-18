import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Event } from '../event';

@Component({
  selector: 'app-listofevents',
  templateUrl: './listofevents.component.html',
  styleUrls: ['./listofevents.component.css']
})
export class ListofeventsComponent implements OnInit {
  event: Event[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    return this.userService.getEvent() 
    .subscribe(event => this.event = event);

  }

}
