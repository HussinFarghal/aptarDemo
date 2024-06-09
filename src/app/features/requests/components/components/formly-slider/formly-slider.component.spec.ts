import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlySliderComponent} from './formly-slider.component';

describe('FormlySliderComponent', () => {
  let component: FormlySliderComponent;
  let fixture: ComponentFixture<FormlySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlySliderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormlySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
