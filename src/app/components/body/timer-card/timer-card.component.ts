import {Component, HostListener, ViewChild} from '@angular/core';
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
  typePomodoro: TypePomodoro;
  valuePomodoro:number;
  disableButtons:boolean = false;

  textPomodoro:string = "Pomodoro";
  textShortBreak:string = "Short Break";
  textLongBreak:string = "Long Break";

  @HostListener('window:resize', ['$event'])
  ngOnResize(event: { target: { innerWidth: number; }; }){
    if (event.target.innerWidth < 480){
      this.textPomodoro = "Pomo";
      this.textLongBreak = "Long";
      this.textShortBreak = "Short";
    }else{
      this.textPomodoro = "Pomodoro";
      this.textLongBreak = "Long Break";
      this.textShortBreak = "Short Break";
    }
  }

  constructor() {
    this.timePomodoro = new TimePomodoro();
    this.valuePomodoro = this.timePomodoro.getPomodoroValue()
    this.typePomodoro = TypePomodoro.POMODORO;
  }

  nextPomodoro(){
    if (this.typePomodoro === TypePomodoro.POMODORO){
      this.setShortBreak()
    }else if (this.typePomodoro === TypePomodoro.SHORT_BREAK){
      this.setLongBreak()
    }else {
      this.setPomodoro()
    }
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
