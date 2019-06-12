import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
        UsersRoutingModule
    ],
    exports: [],
    providers: [],
})
export class UsersModule {}