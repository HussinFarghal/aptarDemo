import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputPartNumberMaskComponent} from './input-part-number-mask.component';

describe('InputPartNumberMaskComponent', () => {
  let component: InputPartNumberMaskComponent;
  let fixture: ComponentFixture<InputPartNumberMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPartNumberMaskComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputPartNumberMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
