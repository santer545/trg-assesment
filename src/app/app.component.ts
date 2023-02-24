import {
  Component,
  ViewChild,
  inject,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'trg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  private sideNavService = inject(SidenavService);
  private translate = inject(TranslateService);
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngAfterViewInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }
}
