import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {IFormType} from "@shared/models/form-type.interface";
import {RequestsService} from "@app/features/requests/requests-service.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {IRequest} from "@shared/models/request.interface";

@Component({
  selector: "app-fromly-form",
  standalone: false,
  templateUrl: "./fromly-form.component.html",
  styleUrl: "./fromly-form.component.scss",
})
export class FromlyFormComponent implements OnInit, OnDestroy {
  @Input() selectedFormType: IFormType = {id: "", name: "", formSchema: []};
  formlyForm: FormGroup = new FormGroup({});
  selectedFormTypeSubscriptions: Subscription = new Subscription();
  model = {};
  apiUrl: string = "https://localhost:44317/requests/";
  id: number = 0;

  constructor(
    private requestsService: RequestsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.selectedFormTypeSubscriptions =
      this.requestsService.selectedFormType$.subscribe(
        (formType: IFormType) => {
          this.selectedFormType = formType;
          console.log("selectedFormType =", this.selectedFormType);
          this.route.queryParams.subscribe((params) => {
            this.id = params["id"];
          });
          if (this.id) {
            this.requestsService
              .getRequests()
              .subscribe((response: IRequest[]) => {
                console.log("response =", response);
              });
          }
        }
      );
  }

  onSubmit(model: any) {
    this.requestsService.submit(model);
  }

  onReset() {
    this.formlyForm.reset();
    this.model = {};
  }

  ngOnDestroy(): void {
    this.selectedFormTypeSubscriptions.unsubscribe();
  }
}
