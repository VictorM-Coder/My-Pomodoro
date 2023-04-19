import {Component, ElementRef, ViewChild} from '@angular/core';
import {BodyComponent} from "./components/body/body/body.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('body', {static: true}) bodyComponent!: BodyComponent;
  title = 'meu-pomodoro';

  refreshBody(){
    this.bodyComponent.refreshTimer();
  }
}
