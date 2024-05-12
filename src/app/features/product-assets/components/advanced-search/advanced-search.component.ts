import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [
    ButtonModule, TooltipModule
  ],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.scss'
})
export class AdvancedSearchComponent {

  protected readonly document = document;
}
