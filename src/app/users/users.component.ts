import { Component, OnInit } from '@angular/core';
import { UsersService } from '../-services/users.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  
  users;
  load;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(){
    this.load = true;
    this.usersService.getUsers()
      .subscribe(
        res => {
          this.users = res;
          this.load = false;
        }
      )
  }

}
