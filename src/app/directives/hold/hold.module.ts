import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnHoldDirective } from './on-hold.directive';

@NgModule({
  declarations: [
    OnHoldDirective
  ],
  imports: [CommonModule],
  exports: [
    OnHoldDirective
  ],
})
export class HoldModule {}
