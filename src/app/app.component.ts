import { Component, ViewChild, inject, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  private sideNavService = inject(SidenavService);
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }
}
