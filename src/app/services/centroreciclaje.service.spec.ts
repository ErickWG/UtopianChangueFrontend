import { TestBed } from '@angular/core/testing';

import { CentroreciclajeService } from './centroreciclaje.service';

describe('CentroreciclajeService', () => {
  let service: CentroreciclajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroreciclajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
