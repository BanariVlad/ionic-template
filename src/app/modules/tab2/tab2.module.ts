import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab2Page } from './tab2.page';

import { HoldModule } from '@/directives/hold/hold.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { UserInfoDialogComponent } from './pop-ups/user-info-dialog/user-info-dialog.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    HoldModule,
  ],
  declarations: [Tab2Page, UserInfoDialogComponent],
})
export class Tab2PageModule {}
