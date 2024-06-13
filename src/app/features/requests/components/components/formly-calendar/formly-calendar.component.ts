import {Component, OnInit} from '@angular/core';
import {FieldType} from "@ngx-formly/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-formly-calendar',
  standalone: false,
  templateUrl: './formly-calendar.component.html',
  styleUrl: './formly-calendar.component.scss'
})
export class FormlyCalendarComponent extends FieldType implements OnInit {
  rangeDates: Date[] | undefined;

  ngOnInit(): void {
  }

  getFormControl(): FormControl {
    return this.formControl as FormControl;
  }
}
