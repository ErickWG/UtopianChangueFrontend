import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconocartComponent } from './iconocart.component';

describe('IconocartComponent', () => {
  let component: IconocartComponent;
  let fixture: ComponentFixture<IconocartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconocartComponent]
    });
    fixture = TestBed.createComponent(IconocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
