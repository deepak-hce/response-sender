import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldUiSamplesComponent } from './input-field-ui-samples.component';

describe('InputFieldUiSamplesComponent', () => {
  let component: InputFieldUiSamplesComponent;
  let fixture: ComponentFixture<InputFieldUiSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldUiSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldUiSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
