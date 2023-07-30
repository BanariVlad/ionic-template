import { Component } from '@angular/core';
import { NestedPage2Component } from '../nested-page2/nested-page2.component';

@Component({
  selector: 'app-nested-page1',
  templateUrl: './nested-page1.component.html',
  styleUrls: ['./nested-page1.component.css'],
})
export class NestedPage1Component {
  nestedPage2 = NestedPage2Component;
}
