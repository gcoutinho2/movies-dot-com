import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieService } from './movie.service';
import { ComponentRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent, MovieDetailComponent],
      imports: [
        CommonModule,
        MoviesRoutingModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        MovieService
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listGenres in ngOnInit', () => {
    spyOn(component, 'listGenres');

    component.ngOnInit();
    
    expect(component.listGenres).toHaveBeenCalled();
  });

  it('should define genres with service', () => {

    component.listGenres()
    
    expect(component.genres).toBeDefined();
  });

  it('should increment pagination page', () => {
    spyOn(component, "getFilter");
    
    component.totalPages = 2
    component.page = 1;

    component.pagination(true);

    expect(component.page).toEqual(component.page + 1);
    expect(component.getFilter).toHaveBeenCalled();
  });
  
  it('should decremeent pagination page', () => {
    spyOn(component, "getFilter");
    
    component.page = 2;

    component.pagination(false);

    expect(component.page).toEqual(component.page + 1);
    expect(component.getFilter).toHaveBeenCalled();
  });
  
  it('should set isViewGenres equal false', () => {
    component.isViewGenres = true;

    component.setVisibleGenres();

    expect(component.isViewGenres).toEqual(false)
  });
});
