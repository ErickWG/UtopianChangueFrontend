import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoHeaderComponent } from './producto-header.component';

describe('ProductoHeaderComponent', () => {
  let component: ProductoHeaderComponent;
  let fixture: ComponentFixture<ProductoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoHeaderComponent]
    });
    fixture = TestBed.createComponent(ProductoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
