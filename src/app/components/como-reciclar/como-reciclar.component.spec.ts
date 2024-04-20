import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoReciclarComponent } from './como-reciclar.component';

describe('ComoReciclarComponent', () => {
  let component: ComoReciclarComponent;
  let fixture: ComponentFixture<ComoReciclarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoReciclarComponent]
    });
    fixture = TestBed.createComponent(ComoReciclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
