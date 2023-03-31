import { Component } from '@angular/core';
import {Task} from "../../../model/task";

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent {
  listTasks: Array<Task> = [];

  public addTask(){
    const value = document.getElementById("recipient-name") as HTMLInputElement | null;
    if (typeof (value?.value) == "string"){
      this.listTasks.push(new Task(value.value))
    }
  }
}
