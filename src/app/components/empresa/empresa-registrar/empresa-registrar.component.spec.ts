import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaRegistrarComponent } from './empresa-registrar.component';

describe('EmpresaRegistrarComponent', () => {
  let component: EmpresaRegistrarComponent;
  let fixture: ComponentFixture<EmpresaRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaRegistrarComponent]
    });
    fixture = TestBed.createComponent(EmpresaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
