import {Component, EventEmitter, HostListener, Input, Output, SimpleChanges} from '@angular/core';

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
  @Output() nextPomodoroTimer = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    this.resetTimer();
  }

  nextPomodoro(){
    this.restart()
    this.nextPomodoroTimer.emit();
  }

  getProgressPercent(){
    this.printTime()
    return 100 - (100 * (this.minutes * 60 + this.seconds)/(this.pomodoroValue * 60))
  }

  printTime(){
    const date = new Date();
    date.setHours(0, this.minutes, this.seconds);
    const dataF = date.toLocaleTimeString('pt-BR', {
      minute: '2-digit',
      second: '2-digit'
    });
    return dataF;
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
      if (this.minutes === 0 && this.seconds === 0) {
        this.playAlarm();
        this.nextPomodoro()
      }
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

  private playAlarm(){
    const audio = new Audio('assets/call-to-attention-123107.mp3')
    audio.play();
  }
}
