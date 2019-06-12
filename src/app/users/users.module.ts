import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new/new.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';

@NgModule({
    declarations: [
        UsersComponent, 
        NewUserComponent
    ],
    imports: [ 
        CommonModule,
        UsersRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [],
})
export class UsersModule {}