import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {
  
  user:User [];
  dataSource= new MatTableDataSource<User>(this.user);
  @ViewChild(MatPaginator, { static:true}) paginator: MatPaginator;
  constructor(private userService:UserService) { }

  ngOnInit() {
     this.dataSource.paginator= this.paginator;
    return this.userService.getUser() 
    .subscribe(user => this.user = user);

  }

}
