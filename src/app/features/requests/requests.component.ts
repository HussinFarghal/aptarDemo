import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RequestsService} from "./requests-service.service";
import {Subscription} from "rxjs";
import {IFormType} from "@shared/models/form-type.interface";


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  standalone: false,
})
export class RequestsComponent implements OnInit, OnDestroy {
  selectedFormType: IFormType = {id: '', name: '', formlySchema: []};
  formGroup!: FormGroup;
  formTypes: IFormType[] = [];
  isLoaded: boolean = false;
  isSuccess: boolean = false;
  isFailed: boolean = false;
  private formTypesSubscription: Subscription = new Subscription();

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      selectedFormType: new FormControl<IFormType>(this.selectedFormType)
    });
    this.getFormTypes();
  }

  private getFormTypes(): IFormType[] {
    this.isLoaded = true;
    this.formTypesSubscription = this.requestsService.getFormTypes().subscribe({
      next: (formTypes: IFormType[]) => {
        this.formTypes = formTypes;
        console.log('formTypes =', formTypes);
        this.isFailed = false;
        this.isSuccess = true;
        this.isLoaded = false;

      },
      error: (error) => {
        this.isLoaded = false;
        this.isFailed = true;
        this.isSuccess = false;
        console.error(error);
      }
    });
    return this.formTypes;
  }

  onFormTypeDropDownChange(event: any) {
    this.requestsService.selectedFormType.next(event.value);
    console.log('selectedFormType =', event.value);
  }

  ngOnDestroy(): void {
    this.formTypesSubscription.unsubscribe();
  }


}
