import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {RequestsService} from "./requests-service.service";
import {Subscription} from "rxjs";
import {IFormType} from "@shared/models/form-type.interface";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.scss"],
  standalone: false,
})
export class RequestsComponent implements OnInit, OnDestroy {
  selectedFormType!: IFormType;
  formType!: FormGroup;
  formTypes: IFormType[] = [];
  isLoaded: boolean = false;
  isSuccess: boolean = false;
  isFailed: boolean = false;
  selectedFormSubscription: Subscription = new Subscription();
  private formTypesSubscription: Subscription = new Subscription();

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit(): void {
    this.formType = new FormGroup({
      selectedFormType: new FormControl<IFormType>(this.selectedFormType),
    });
    this.selectedFormSubscription = this.requestsService.selectedFormType$.subscribe({
      next: (selectedFormType: IFormType) => {
        this.selectedFormType = selectedFormType;
        console.log("selectedFormType =", selectedFormType);
      },
    });
    this.getFormTypes();

  }

  onFormTypeDropDownChange(event: DropdownChangeEvent) {
    this.requestsService.selectedFormType = event.value;
    console.log("selectedFormType =", event.value);
  }

  ngOnDestroy(): void {
    this.formTypesSubscription.unsubscribe();
    this.selectedFormSubscription.unsubscribe();
  }

  private getFormTypes(): IFormType[] {
    this.isLoaded = true;
    this.formTypesSubscription = this.requestsService.getFormTypes().subscribe({
      next: (formTypes: IFormType[]) => {
        this.formTypes = formTypes;
        console.log("formTypes =", formTypes);
        this.isFailed = false;
        this.isSuccess = true;
        this.isLoaded = false;
      }, error: (error) => {
        this.isLoaded = false;
        this.isFailed = true;
        this.isSuccess = false;
        console.error(error);
      },
    });
    return this.formTypes;
  }


}
