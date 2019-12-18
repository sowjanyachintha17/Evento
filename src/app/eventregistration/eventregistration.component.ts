import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Register } from '../register';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit {

  posts: Register;
  register: Register = new Register();
  submitted = false;
  
  constructor(private userService: UserService, private router: Router){ }
  ngOnInit() {
  }
  

  save() {
    this.userService.postEvent(this.register)
      .subscribe(data => console.log(data), error => console.log(error));
    this.register = new Register();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


  

}
