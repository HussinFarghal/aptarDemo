import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyCalendarComponent} from './formly-calendar.component';

describe('FormlyCalendarComponent', () => {
  let component: FormlyCalendarComponent;
  let fixture: ComponentFixture<FormlyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyCalendarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormlyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
