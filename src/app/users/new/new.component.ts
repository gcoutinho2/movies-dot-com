import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewUserComponent implements OnInit {

  public user = {} as User;
  fieldRequired = 'Campo Obrigatório';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    
  }

  onSubmit(form) {
    this.user = form.value;

    this.userService.save(this.user);

    alert("Dados salvos com sucesso");
    return this.router.navigate(['/login'])

  }

}
