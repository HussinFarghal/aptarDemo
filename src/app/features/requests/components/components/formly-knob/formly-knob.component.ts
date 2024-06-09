import {Component, OnInit} from '@angular/core';
import {FieldType} from "@ngx-formly/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-formly-knob',
  standalone: false,
  templateUrl: './formly-knob.component.html',
  styleUrl: './formly-knob.component.scss'
})
export class FormlyKnobComponent extends FieldType implements OnInit {
  ngOnInit(): void {
    this.props.min = this.props.min ?? 0;
    this.props.max = this.props.max ?? 100;
    this.props.step = this.props.step ?? 1;
    this.props['valueTemplate'] = this.props['valueTemplate'] ?? '{10}';

  }

  getFormControl(): FormControl {
    return this.formControl as FormControl;
  }
}
