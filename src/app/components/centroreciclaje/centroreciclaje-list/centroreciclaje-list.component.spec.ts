import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroreciclajeListComponent } from './centroreciclaje-list.component';

describe('CentroreciclajeListComponent', () => {
  let component: CentroreciclajeListComponent;
  let fixture: ComponentFixture<CentroreciclajeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroreciclajeListComponent]
    });
    fixture = TestBed.createComponent(CentroreciclajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
