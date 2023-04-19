import {Component, ViewChild} from '@angular/core';
import {TimerCardComponent} from "../timer-card/timer-card.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @ViewChild('timerCardComponent', {static: true}) timerCardComponent!: TimerCardComponent
  refreshTimer(){
    this.timerCardComponent.refreshTimer();
  }
}
