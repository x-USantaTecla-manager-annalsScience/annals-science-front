import { Component, EventEmitter, Output } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'annals-science-front';
  url = environment.annalsScienceUrl;
}
