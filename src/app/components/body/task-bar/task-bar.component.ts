import { Component } from '@angular/core';
import {Task} from "../../../model/task";
import { ViewChild, ElementRef} from '@angular/core';
import {TaskRepository} from "../../../repository/TaskRepository";

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent {
  listTasks: Array<Task> = [];
  taskRepository:TaskRepository;
  @ViewChild('cancelButton') cancelButton: ElementRef | undefined;

  constructor() {
    this.taskRepository = new TaskRepository();
    this.listTasks = this.taskRepository.getAll();
  }

  completeTask(task:Task){
    console.log(task)
    this.taskRepository.update(task);
  }

  public addTask(){
    const value = document.getElementById("recipient-name") as HTMLInputElement | null;
    const modal = document.getElementById('exampleModal') as HTMLInputElement | null;
    if (typeof (value?.value) === "string"){
      let task = new Task(value.value);
      this.listTasks.push(task);
      this.taskRepository.save(task)
      value.value = "";
    }
    this.cancelButton?.nativeElement.click();
  }
}
