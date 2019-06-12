import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/user';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewUserComponent implements OnInit {

  public user = {} as User;
  fieldRequired = 'Campo Obrigatório';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }

}
