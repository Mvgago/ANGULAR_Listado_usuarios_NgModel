import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { User } from '../models/user.models';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  @Output() sendUser = new EventEmitter();

  public user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: '',
      age: 0
    };
  }

  public saveUsername(value: string): void {
      this.user.name = value;
  }

  public createUser(): void {
    this.sendUser.emit(this.user);

  }

}

 


