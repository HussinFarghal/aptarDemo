import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FromlyFormComponent} from './fromly-form.component';

describe('FromlyFormComponent', () => {
  let component: FromlyFormComponent;
  let fixture: ComponentFixture<FromlyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromlyFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FromlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
