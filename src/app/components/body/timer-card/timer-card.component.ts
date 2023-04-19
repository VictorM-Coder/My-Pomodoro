import {Component, SimpleChanges, ViewChild} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";
import {TimerComponent} from "../timer/timer.component";
import {TypePomodoro} from "../../../model/TypePomodoro";

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent {
  @ViewChild('timerComponent', {static: true}) timerComponent!: TimerComponent;
  private timePomodoro:TimePomodoro;
  private typePomodoro: TypePomodoro;
  valuePomodoro:number;
  disableButtons:boolean = false;

  constructor() {
    this.timePomodoro = new TimePomodoro();
    this.valuePomodoro = this.timePomodoro.getPomodoroValue()
    this.typePomodoro = TypePomodoro.POMODORO;
  }

  refreshTimer(){
    switch (this.typePomodoro){
      case TypePomodoro.POMODORO:
        this.setPomodoro();
        break;
      case TypePomodoro.SHORT_BREAK:
        this.setShortBreak();
        break;
      case TypePomodoro.LONG_BREAK:
        this.setLongBreak();
        break;
    }
    this.timerComponent.restart();
  }

  onStateChanceTimer(){
    this.disableButtons = !this.disableButtons;
  }

  setPomodoro(){
    this.valuePomodoro = this.timePomodoro.getPomodoroValue();
    this.typePomodoro = TypePomodoro.POMODORO;
  }

  setLongBreak(){
    this.valuePomodoro = this.timePomodoro.getLongBreakValue();
    this.typePomodoro = TypePomodoro.LONG_BREAK;
  }

  setShortBreak(){
    this.valuePomodoro = this.timePomodoro.getShortBreakValue();
    this.typePomodoro = TypePomodoro.SHORT_BREAK;
  }
}
