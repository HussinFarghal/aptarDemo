import {Component, OnInit} from '@angular/core';
import {FieldType} from "@ngx-formly/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-formly-slider',
  standalone: false,
  templateUrl: './formly-slider.component.html',
  styleUrl: './formly-slider.component.scss'
})
export class FormlySliderComponent extends FieldType implements OnInit {
  getFormControl(): FormControl {
    return this.formControl as FormControl;
  }

  ngOnInit() {
    // Initialize default values for the slider if not provided
    // if (this.props.min === undefined) {
    //   this.props.min = 0;
    // }
    // if (this.props.max === undefined) {
    //   this.props.max = 100;
    // }
    // if (this.props.step === undefined) {
    //   this.props.step = 0;
    // }
  }
}
