import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPageRootComponent } from './nested-page-root.component';

describe('NestedPageRootComponent', () => {
  let component: NestedPageRootComponent;
  let fixture: ComponentFixture<NestedPageRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedPageRootComponent]
    });
    fixture = TestBed.createComponent(NestedPageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
