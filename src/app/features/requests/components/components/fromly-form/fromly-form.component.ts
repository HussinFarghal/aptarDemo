import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IFormType} from "@shared/models/form-type.interface";
import {RequestsService} from "@app/features/requests/requests-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-fromly-form',
  standalone: false,
  templateUrl: './fromly-form.component.html',
  styleUrl: './fromly-form.component.scss'
})
export class FromlyFormComponent implements OnInit, OnDestroy {
  @Input() selectedFormType: IFormType = {id: '', name: '', formlySchema: []};
  formlyForm: FormGroup = new FormGroup({});
  selectedFormTypeSubscriptions: Subscription = new Subscription();
  model = {};

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit(): void {
    this.selectedFormTypeSubscriptions = this.requestsService.selectedFormType$.subscribe((formType: IFormType) => {
      this.selectedFormType = formType;
      console.log('selectedFormType =', this.selectedFormType);
    });
  }

  onSubmit(model: {}) {
    console.log('model =', model)
  }

  onReset() {
    this.formlyForm.reset();
    this.model = {};
  }

  ngOnDestroy(): void {
    this.selectedFormTypeSubscriptions.unsubscribe();
  }
}
