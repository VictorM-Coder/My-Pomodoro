import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() totalMinutes:number = 25;
  @Input() totalSeconds:number = 0;
  minutes:number;
  seconds:number;
  timeout:any;

  constructor() {
    this.minutes = this.totalMinutes;
    this.seconds = this.totalSeconds;
  }
  decrementSeconds(){
    if (this.seconds === 0){
      if (this.minutes >= 1) this.seconds = 59
      this.decrementMinutes()
    }else{
      this.seconds--;
    }
  }

  decrementMinutes(){
    if (this.minutes === 0 && this.seconds === 0) clearInterval(this.timeout)
    else this.minutes--
  }

  @Output() startTimer = () => {
    this.timeout = setInterval(() => {
      this.decrementSeconds()
    }, 1000)
  }

  getProgressPercent(){
    let totalTimeInSeconds = this.totalMinutes * 60 + this.totalSeconds;
    let elapsedTimeInSeconds = this.minutes * 60 + this.seconds;
    return 100 - (100 * elapsedTimeInSeconds/totalTimeInSeconds)
  }
}
