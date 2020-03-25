import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcheckPage } from './newcheck.page';

const routes: Routes = [
  {
    path: '',
    component: NewcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcheckPageRoutingModule {}
