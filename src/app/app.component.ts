import {Component} from '@angular/core';
import {UpPageComponent} from "./uppage/uppage.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    UpPageComponent
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
