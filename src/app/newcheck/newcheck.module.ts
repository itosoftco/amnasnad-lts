import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcheckPageRoutingModule } from './newcheck-routing.module';

import { NewcheckPage } from './newcheck.page';
///import {DpDatePickerModule} from 'ng2-jalali-date-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcheckPageRoutingModule,
///DpDatePickerModule
  ],
  declarations: [NewcheckPage]
})
export class NewcheckPageModule {}
