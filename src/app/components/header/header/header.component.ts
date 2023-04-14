import {Component, ElementRef, ViewChild} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  timerPomodoro:TimePomodoro = new TimePomodoro();
  pomodoroValue:number = this.timerPomodoro.getPomodoroValue();
  shortBreakValue:number = this.timerPomodoro.getShortBreakValue();
  longBreakValue:number = this.timerPomodoro.getLongBreakValue();

  formSettings: FormGroup = new FormGroup({
    pomodoroInput: new FormControl(this.pomodoroValue),
    shortBreakInput: new FormControl(this.shortBreakValue),
    longBreakInput: new FormControl(this.longBreakValue),
  });

  @ViewChild('modalSettings', {static: true}) modalSettings!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(){
    this.modalSettings.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.clearModal();
    })
  }

  clearModal(){
    console.log(this.formSettings)
    this.formSettings.reset({
      pomodoroInput: this.pomodoroValue,
      shortBreakInput: this.shortBreakValue,
      longBreakInput: this.longBreakValue
    })
  }
}
