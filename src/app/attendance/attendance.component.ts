import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Event } from '../event';
import { Register } from '../register';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
   id:string;
  register: Register[] ;
  event: Event [];
  submitted= false;
  attend:Register;


  constructor(private userService:UserService) { }

  ngOnInit() {
    this.reloadData();
    this.getData();
  
  }
  getData() {
    return this.userService.getByEventId()
   .subscribe(register => this.register= register);
  }
  reloadData() {
    return this.userService.getEventTitle() 
    .subscribe(event => this.event = event);
    
  }
  // updateActive() {
  //   this.userService.updateAttendance(this.register.id,
  //     { attend: this.register.attendance})
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.attend = data as Register;
  //       },
  //       error => console.log(error));
  // }
  // onSubmit(){
  //   this.updateActive();
  // }
}
