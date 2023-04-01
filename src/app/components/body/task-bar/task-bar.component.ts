import { Component } from '@angular/core';
import {Task} from "../../../model/task";
import { ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent {
  listTasks: Array<Task> = [];
  @ViewChild('cancelButton') cancelButton: ElementRef | undefined;

  public addTask(){
    const value = document.getElementById("recipient-name") as HTMLInputElement | null;
    const modal = document.getElementById('exampleModal') as HTMLInputElement | null;
    if (typeof (value?.value) === "string"){
      this.listTasks.push(new Task(value.value))
      value.value = "";
    }
    this.cancelButton?.nativeElement.click();
  }
}
