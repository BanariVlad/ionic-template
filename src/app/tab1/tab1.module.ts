import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NestedPageRootComponent } from './components/nested-page-root/nested-page-root.component';
import { NestedPage1Component } from './components/nested-page1/nested-page1.component';
import { NestedPage2Component } from './components/nested-page2/nested-page2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, NestedPageRootComponent, NestedPage1Component, NestedPage2Component]
})
export class Tab1PageModule {}
