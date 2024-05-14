import { Routes } from '@angular/router';
import { MyformComponent } from '../myform/myform.component';
import { UpdateformComponent } from '../updateform/updateform.component';

export const routes: Routes = [
    {path:'form',component:MyformComponent},
    {path:'updateform',component:UpdateformComponent}
];
