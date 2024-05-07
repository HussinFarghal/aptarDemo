import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {CommonModule} from "@angular/common";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-bread-crumbs',
  standalone: true,
  imports: [BreadcrumbModule, RouterModule, CommonModule],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent implements OnInit {
  items : MenuItem[] | undefined;

  home : MenuItem | undefined;

  ngOnInit() : void {
    this.items = [{icon: 'pi pi-home', route: '/'}, {label: 'Assets'}, {
      label: 'Product Assets',
      route: '/product-assets'
    }];

  }
}
