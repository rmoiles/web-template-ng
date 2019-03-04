import { TestBed } from '@angular/core/testing';

import { TxmComponentsService } from './txm-components.service';

describe('TxmComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TxmComponentsService = TestBed.get(TxmComponentsService);
    expect(service).toBeTruthy();
  });
});
