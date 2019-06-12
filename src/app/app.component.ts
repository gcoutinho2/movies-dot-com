import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-dot-com';

  isViewMenu:boolean = false;

  constructor(private authService: AuthService){

  }

  ngOnInit() {
    this.authService.menuViewEmitter.subscribe((show => this.isViewMenu = show));
  }
}
