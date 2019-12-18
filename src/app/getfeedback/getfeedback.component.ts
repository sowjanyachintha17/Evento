import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Event } from '../event';
import { Register } from '../register';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-getfeedback',
  templateUrl: './getfeedback.component.html',
  styleUrls: ['./getfeedback.component.css']
})
export class GetfeedbackComponent implements OnInit {
 feedback: Feedback[];
 event: Event[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getData();
    this.reloadData();
  }
  getData() {
    return this.userService.getFeedback()
   .subscribe(feedback => this.feedback= feedback);
  }
  reloadData() {
    return this.userService.getEventTitle()
   .subscribe(event => this.event= event);
  }

}
