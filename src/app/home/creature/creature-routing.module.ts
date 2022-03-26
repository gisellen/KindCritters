import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaturePage } from './creature.page';

const routes: Routes = [
  {
    path: '',
    component: CreaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaturePageRoutingModule {}
