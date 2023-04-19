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

  formSettings: FormGroup = new FormGroup({
    pomodoroInput: new FormControl(this.timerPomodoro.getPomodoroValue()),
    shortBreakInput: new FormControl(this.timerPomodoro.getShortBreakValue()),
    longBreakInput: new FormControl(this.timerPomodoro.getLongBreakValue()),
  });

  @ViewChild('modalSettings', {static: true}) modalSettings!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(){
    this.modalSettings.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.clearModal();
    })
  }

  clearModal(){
    this.formSettings.reset({
      pomodoroInput: this.timerPomodoro.getPomodoroValue(),
      shortBreakInput: this.timerPomodoro.getShortBreakValue(),
      longBreakInput: this.timerPomodoro.getLongBreakValue()
    })
  }
}
