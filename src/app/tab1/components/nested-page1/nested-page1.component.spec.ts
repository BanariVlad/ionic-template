import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPage1Component } from './nested-page1.component';

describe('NestedPage1Component', () => {
  let component: NestedPage1Component;
  let fixture: ComponentFixture<NestedPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedPage1Component]
    });
    fixture = TestBed.createComponent(NestedPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
