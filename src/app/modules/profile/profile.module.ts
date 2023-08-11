import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile.page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, ProfileRoutingModule, IonicModule, FormsModule],
})
export class ProfileModule {}
