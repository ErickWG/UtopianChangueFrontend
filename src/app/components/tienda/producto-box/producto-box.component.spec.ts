import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoBoxComponent } from './producto-box.component';

describe('ProductoBoxComponent', () => {
  let component: ProductoBoxComponent;
  let fixture: ComponentFixture<ProductoBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoBoxComponent]
    });
    fixture = TestBed.createComponent(ProductoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
