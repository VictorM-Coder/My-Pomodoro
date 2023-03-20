import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  minutes:number = 1;
  seconds:number = 0;
  timeout:any;
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

  ngAfterViewInit(){
    this.timeout = setInterval(() => {
      this.decrementSeconds()
    }, 1000)
  }
}
