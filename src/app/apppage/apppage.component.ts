import { Component } from '@angular/core';
import {UpPageComponent} from "../uppage/uppage.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {MapComponent} from "../map/map.component";
import {GrafAComponent} from "../graf-a/graf-a.component";
import {GrafbComponent} from "../grafb/grafb.component";
import {GrafcComponent} from "../grafc/grafc.component";
import {StrafickGrafComponent} from "../strafick-graf/strafick-graf.component";
import {HttpClientModule} from "@angular/common/http";
import {GoogleGrafComponent} from "../google-graf/google-graf.component";
import {StrafickinfoComponent} from "../strafickinfo/strafickinfo.component";
import {SelAComponent} from "../sel-a/sel-a.component";
import {SelBComponent} from "../sel-b/sel-b.component";
import {SelCComponent} from "../sel-c/sel-c.component";
import {SelDComponent} from "../sel-d/sel-d.component";
import {SelEComponent} from "../sel-e/sel-e.component";
import {SelFComponent} from "../sel-f/sel-f.component";
import {ProfilComponent} from "../profil/profil.component";
import {TodoComponent} from "../todo/todo.component";
import {MessagComponent} from "../messag/messag.component";
import {DownpageComponent} from "../downpage/downpage.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {yourGuardGuard} from "../your-guard.guard";

@Component({
  selector: 'app-apppage',
  standalone: true,
  imports: [
    UpPageComponent,
    SidebarComponent,
    MapComponent,
    GrafAComponent,
    GrafbComponent,
    GrafcComponent,
    StrafickGrafComponent,
    GoogleGrafComponent,
    StrafickinfoComponent,
    SelAComponent,
    SelBComponent,
    SelCComponent,
    SelDComponent,
    SelEComponent,
    SelFComponent,
    ProfilComponent,
    TodoComponent,
    MessagComponent,
    DownpageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

  ],

  templateUrl: './apppage.component.html',
  styleUrl: '../app.component.scss'
})



export class ApppageComponent {
  protected readonly MapComponent = MapComponent;
  UserIsLogIn:boolean = true;


  protected readonly console = console;
  protected readonly yourGuardGuard = yourGuardGuard;
  protected readonly window = window;
}
