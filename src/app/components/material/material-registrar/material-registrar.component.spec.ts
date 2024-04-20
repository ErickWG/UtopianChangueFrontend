import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRegistrarComponent } from './material-registrar.component';

describe('MaterialRegistrarComponent', () => {
  let component: MaterialRegistrarComponent;
  let fixture: ComponentFixture<MaterialRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialRegistrarComponent]
    });
    fixture = TestBed.createComponent(MaterialRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
