import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {ListAwesomeComponent} from './list-awesome/list-awesome.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: 'list-awesome',
    component: ListAwesomeComponent
  },
  {
    path: 'add-awesome',
    component:  AddComponent
  },
  {
    path: 'edit-awesome',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
