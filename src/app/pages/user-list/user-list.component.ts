import { Component, OnInit } from '@angular/core';
import { User } from './models/user.models'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: User[] = [];
  public isNewUserActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(): void {
    this.userList = [
      {
        name: 'Mario',
        age: 45
      },
      {
        name: 'Lucia',
        age: 30
      },
      {
        name: 'María',
        age: 80
      },
    ]
  }

  public viewNewUser(): void {
    this.isNewUserActive = true;
  }

  public back(): void {
    this.isNewUserActive = false;
  }

  public handleUser(user: User): void {
    this.userList.push(user);
    this.isNewUserActive = false;

  }







}
