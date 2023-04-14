import {Component} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent {
  private timePomodoro:TimePomodoro;
  valuePomodoro:number;
  disableButtons:boolean = false;

  constructor() {
    this.timePomodoro = new TimePomodoro();
    this.valuePomodoro = this.timePomodoro.getPomodoroValue()
  }

  onStateChanceTimer(){
    this.disableButtons = !this.disableButtons;
  }

  setPomodoro(){
    this.valuePomodoro = this.timePomodoro.getPomodoroValue();
  }

  setLongBreak(){
    this.valuePomodoro = this.timePomodoro.getLongBreakValue();
  }

  setShortBreak(){
    this.valuePomodoro = this.timePomodoro.getShortBreakValue();
  }
}
