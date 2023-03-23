import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() pomodoro: TimePomodoro = TimePomodoro.POMODORO;
  minutes:number = this.pomodoro;
  seconds:number = 0;
  percentComplete:number = 0;
  timerInterval:any;
  timerRunning:boolean = false;

  @Output() changeStateTimer = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    this.minutes = this.pomodoro;
    this.seconds = 0;
    this.percentComplete = 0;
    if (this.timerInterval){
      clearInterval(this.timerInterval);
    }
  }
  startTimer = () => {
    this.minutes = this.pomodoro

    this.timerInterval = setInterval(() => {
      if (this.timerRunning){
        this.decrementSeconds();
        this.percentComplete = this.getProgressPercent();
      }
    }, 1000)
  }

  startPause(){
    this.changeStateTimer.emit()
    this.timerRunning = !this.timerRunning;
    if (this.percentComplete === 0 && this.timerRunning){
      this.startTimer()
    }
  }

  private decrementSeconds(){
    if (this.seconds === 0){
      if (this.minutes >= 1) this.seconds = 59
      this.decrementMinutes()
    }else{
      this.seconds--;
    }
  }

  private decrementMinutes(){
    if (this.minutes === 0 && this.seconds === 0) clearInterval(this.timerInterval)
    else this.minutes--
  }
  private getProgressPercent(){
    let totalTimeInSeconds = this.pomodoro * 60;
    let elapsedTimeInSeconds = this.minutes * 60 + this.seconds;
    return 100 - (100 * elapsedTimeInSeconds/totalTimeInSeconds)
  }
}
