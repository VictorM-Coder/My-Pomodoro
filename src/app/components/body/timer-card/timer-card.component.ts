import {Component} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent {
  timePomodoro:TimePomodoro = TimePomodoro.POMODORO;
  disableButtons:boolean = false;

  onStateChanceTimer(){
    this.disableButtons = !this.disableButtons;
  }

  setPomodoro(){
    this.timePomodoro = TimePomodoro.POMODORO;
  }

  setLongBreak(){
    this.timePomodoro = TimePomodoro.LONG_BREAK;
  }

  setShortBreak(){
    this.timePomodoro = TimePomodoro.SHORT_BREAK;
  }
}
