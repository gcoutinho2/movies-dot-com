import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id: string;
  inscription: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscription = this.route.params
      .subscribe((params: any) => {
        this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();    
  }

}
