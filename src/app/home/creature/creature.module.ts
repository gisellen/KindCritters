import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaturePageRoutingModule } from './creature-routing.module';

import { CreaturePage } from './creature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaturePageRoutingModule
  ],
  declarations: [CreaturePage]
})
export class CreaturePageModule {}
