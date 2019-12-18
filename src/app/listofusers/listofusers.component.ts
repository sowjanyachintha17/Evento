import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {

  user:User [];
  constructor(private userService:UserService) { }

  ngOnInit() {
    return this.userService.getUser() 
    .subscribe(user => this.user = user);

  }

}
