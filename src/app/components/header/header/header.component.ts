import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {TimePomodoro} from "../../../model/time-pomodoro";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Modal} from "bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() changePomodoroTimer = new EventEmitter();
  @ViewChild('modalSettings', {static: true}) modalSettings!: ElementRef<HTMLDivElement>;
  @ViewChild('cancelModal', {static: true}) cancelModal!: ElementRef<HTMLButtonElement>;
  @ViewChild('pomodoroInput', {static: true}) pomodoroInput!: ElementRef<HTMLInputElement>;
  @ViewChild('shortBreakInput', {static: true}) shortBreakInput!: ElementRef<HTMLInputElement>;
  @ViewChild('longBreakInput', {static: true}) longBreakInput!: ElementRef<HTMLInputElement>;

  timerPomodoro:TimePomodoro = new TimePomodoro();

  formSettings: FormGroup = new FormGroup({
    pomodoroInput: new FormControl(this.timerPomodoro.getPomodoroValue()),
    shortBreakInput: new FormControl(this.timerPomodoro.getShortBreakValue()),
    longBreakInput: new FormControl(this.timerPomodoro.getLongBreakValue()),
  });

  ngAfterViewInit(){
    this.modalSettings.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.clearModal();
    })
  }
  saveChanges(){
    this.timerPomodoro.setPomodoroValue(Number(this.pomodoroInput.nativeElement.value))
    this.timerPomodoro.setShortBreakValue(Number(this.shortBreakInput.nativeElement.value))
    this.timerPomodoro.setLongBreakValue(Number(this.longBreakInput.nativeElement.value))
    this.cancelModal.nativeElement.click();
    this.changePomodoroTimer.emit();
  }

  clearModal(){
    this.formSettings.reset({
      pomodoroInput: this.timerPomodoro.getPomodoroValue(),
      shortBreakInput: this.timerPomodoro.getShortBreakValue(),
      longBreakInput: this.timerPomodoro.getLongBreakValue()
    })
  }
}
