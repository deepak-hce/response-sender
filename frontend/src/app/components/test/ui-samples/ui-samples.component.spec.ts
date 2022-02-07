import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSamplesComponent } from './ui-samples.component';

describe('UiSamplesComponent', () => {
    let component: UiSamplesComponent;
    let fixture: ComponentFixture<UiSamplesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiSamplesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiSamplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
