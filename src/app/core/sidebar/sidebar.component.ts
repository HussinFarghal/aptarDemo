import {Component, ViewChild} from '@angular/core';
import {Sidebar, SidebarModule} from "primeng/sidebar";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [
    AvatarModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    SidebarModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef! : Sidebar;
  sidebarVisible : boolean = true;
  protected readonly document = document;

  closeCallback(e : Event) : void {
    this.sidebarRef.close(e);
  }
}
