import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyWrapperCustomComponent} from './formly-wrapper-custom.component';

describe('FormlyWrapperCustomComponent', () => {
  let component: FormlyWrapperCustomComponent;
  let fixture: ComponentFixture<FormlyWrapperCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyWrapperCustomComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormlyWrapperCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
