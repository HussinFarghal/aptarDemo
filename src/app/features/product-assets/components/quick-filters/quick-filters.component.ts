import {Component} from '@angular/core';
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-quick-filters',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './quick-filters.component.html',
  styleUrl: './quick-filters.component.scss'
})
export class QuickFiltersComponent {

}
