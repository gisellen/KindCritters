import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderDetailPageRoutingModule } from './reminder-detail-routing.module';

import { ReminderDetailPage } from './reminder-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderDetailPageRoutingModule
  ],
  declarations: [ReminderDetailPage]
})
export class ReminderDetailPageModule {}
