import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUiSamplesComponent } from './button-ui-samples.component';

describe('ButtonUiSamplesComponent', () => {
  let component: ButtonUiSamplesComponent;
  let fixture: ComponentFixture<ButtonUiSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUiSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonUiSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
