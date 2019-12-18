import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  posts: Feedback;
  feedback: Feedback = new Feedback();
  submitted = false;
  
  constructor(private userService: UserService, private router: Router){ }
  ngOnInit() {
  }
  

  save() {
    this.userService.postFeedback(this.feedback)
      .subscribe(data => console.log(data), error => console.log(error));
    this.feedback = new Feedback();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


}
