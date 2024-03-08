import {Component} from '@angular/core';
import {UpPageComponent} from "./uppage/uppage.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MapComponent} from "./map/map.component";
import {GrafAComponent} from "./graf-a/graf-a.component";
import {GrafbComponent} from "./grafb/grafb.component";
import {GrafcComponent} from "./grafc/grafc.component";
import {StrafickGrafComponent} from "./strafick-graf/strafick-graf.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    UpPageComponent,
    SidebarComponent,
    MapComponent,
    GrafAComponent,
    GrafbComponent,
    GrafcComponent,
    StrafickGrafComponent,
  ]
})

export class AppComponent {
  title = 'appmodule';
  ngOnInit() {

  }
  constructor() {

  }


}
