import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Event } from '../event';
import { User } from '../user';


@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent implements OnInit {


  event: Event = new Event();
  tags: string;
  coordinates:number|undefined;
  submitted = false;
  
  constructor(private userService: UserService, private router: Router){ }
  ngOnInit() {
    
  }
  
  save() {
    var tags= new String (this.tags);
    var splits = tags.split(",");
    this.event.tags=splits;
    console.log(splits);
    var coordinates= new String(this.coordinates);
    var splits = coordinates.split(",");
    this.event.coordinates=splits;
    console.log(splits);
    this.userService.createEvent(this.event)
    .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.tags);
    this.event = new Event();
      
    
  }
  

  onSubmit() {
    this.submitted = true; 
    this.save(); 
       
  }
  
  


}
