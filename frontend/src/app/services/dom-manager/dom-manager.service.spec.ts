import { TestBed } from '@angular/core/testing';

import { DomManagerService } from './dom-manager.service';

describe('DomManagerService', () => {
    let service: DomManagerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DomManagerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
