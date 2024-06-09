import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyKnobComponent} from './formly-knob.component';

describe('FormlyKnobComponent', () => {
  let component: FormlyKnobComponent;
  let fixture: ComponentFixture<FormlyKnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyKnobComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormlyKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
