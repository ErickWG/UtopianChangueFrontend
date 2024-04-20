import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReciclajeComponent } from './info-reciclaje.component';

describe('InfoReciclajeComponent', () => {
  let component: InfoReciclajeComponent;
  let fixture: ComponentFixture<InfoReciclajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoReciclajeComponent]
    });
    fixture = TestBed.createComponent(InfoReciclajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
