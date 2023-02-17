import { SearchesComponent } from './searches/searches.component';
import { MySearchesComponent } from './my-searches/my-searches.component';

import { AccessGuard } from '../core/guards/access.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'searches',
    pathMatch: 'full'
  },
  {
    path: 'my-searches',
    component: MySearchesComponent,
    canActivate: [AccessGuard]
  },
  {
    path: 'searches',
    component: SearchesComponent,
    canActivate: [AccessGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule { }
