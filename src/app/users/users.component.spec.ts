import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { NewUserComponent } from './new/new.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { FormsModule } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UsersComponent,
        NewUserComponent 
      ],
      imports: [ 
        CommonModule,
        UsersRoutingModule,
        FormsModule
    ],
    providers:[ChildrenOutletContexts]
   
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
