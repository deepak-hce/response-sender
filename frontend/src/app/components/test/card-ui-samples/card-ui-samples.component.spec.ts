import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUiSamplesComponent } from './card-ui-samples.component';

describe('CardUiSamplesComponent', () => {
    let component: CardUiSamplesComponent;
    let fixture: ComponentFixture<CardUiSamplesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardUiSamplesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardUiSamplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
