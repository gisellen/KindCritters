import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReminderDetailPage } from './reminder-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReminderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReminderDetailPageRoutingModule {}
