import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() pomodoroValue:number = 25;
  minutes:number = this.pomodoroValue;
  seconds:number = 0;
  timerInterval:any;
  timerRunning:boolean = false;

  @Output() changeStateTimer = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    this.resetTimer();
  }

  getProgressPercent(){
    return 100 - (100 * (this.minutes * 60 + this.seconds)/(this.pomodoroValue * 60))
  }

  restart(){
    this.resetTimer();
    if (this.timerRunning){
      this.changeStateTimerAndEmitEvent();
    }
  }

  startPause(){
    this.changeStateTimerAndEmitEvent();
    if (this.getProgressPercent() === 0 && this.timerRunning){
      this.startTimer()
    }
  }

  private startTimer = () => {
    this.minutes = this.pomodoroValue
    this.timerInterval = setInterval(() => {
      if (this.timerRunning) this.decrementTime();
    }, 1000)
  }

  private changeStateTimerAndEmitEvent(){
    this.changeStateTimer.emit()
    this.timerRunning = !this.timerRunning;
  }

  private decrementTime(){
    if (this.seconds === 0){
      if (this.minutes >= 1) this.seconds = 59
      if (this.minutes === 0 && this.seconds === 0) clearInterval(this.timerInterval)
      else this.minutes--
    }else{
      this.seconds--;
    }
  }

  private resetTimer(){
    this.minutes = this.pomodoroValue;
    this.seconds = 0;
    if (this.timerInterval){
      clearInterval(this.timerInterval);
    }
  }
}
