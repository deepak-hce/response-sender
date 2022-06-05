import { TestBed } from '@angular/core/testing';

import { RasThemeService } from './ras-theme.service';

describe('RasThemeService', () => {
  let service: RasThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RasThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
