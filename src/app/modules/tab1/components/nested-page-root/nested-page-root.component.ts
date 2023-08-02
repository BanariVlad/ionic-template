import { Component } from '@angular/core';
import { NestedPage1Component } from '../nested-page1/nested-page1.component';

@Component({
  selector: 'app-nested-page-root',
  templateUrl: './nested-page-root.component.html',
  styleUrls: ['./nested-page-root.component.css'],
})
export class NestedPageRootComponent {
  nestedPage1 = NestedPage1Component;
}
