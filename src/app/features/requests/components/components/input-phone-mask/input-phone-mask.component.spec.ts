import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputPhoneMaskComponent} from './input-phone-mask.component';

describe('InputPhoneMaskComponent', () => {
  let component: InputPhoneMaskComponent;
  let fixture: ComponentFixture<InputPhoneMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPhoneMaskComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputPhoneMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
