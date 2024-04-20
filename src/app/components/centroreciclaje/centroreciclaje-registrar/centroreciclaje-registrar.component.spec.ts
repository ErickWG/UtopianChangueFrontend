import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroreciclajeRegistrarComponent } from './centroreciclaje-registrar.component';

describe('CentroreciclajeRegistrarComponent', () => {
  let component: CentroreciclajeRegistrarComponent;
  let fixture: ComponentFixture<CentroreciclajeRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroreciclajeRegistrarComponent]
    });
    fixture = TestBed.createComponent(CentroreciclajeRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
