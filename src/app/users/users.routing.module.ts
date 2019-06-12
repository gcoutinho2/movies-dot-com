import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewUserComponent } from './new/new.component';
import { UsersComponent } from './users.component';

const userRoutes = [
    { path: 'users', component: UsersComponent, children: [
        { path: 'new', component: NewUserComponent }
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule {}