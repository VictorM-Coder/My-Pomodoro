import { Component } from '@angular/core';
import {Task} from "../../../model/task";
import { ViewChild, ElementRef} from '@angular/core';
import {TaskRepository} from "../../../repository/TaskRepository";
import { Modal } from "bootstrap";

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent {
  task:Task = new Task("");
  listTasks: Array<Task> = [];
  taskRepository:TaskRepository;
  @ViewChild('cancelButtonAdd') cancelButtonAdd: ElementRef | undefined;
  @ViewChild('cancelButtonEdit') cancelButtonEdit: ElementRef | undefined;
  @ViewChild('editInput') editInput: ElementRef | undefined;
  @ViewChild('addInput') addInput: ElementRef | undefined;


  constructor() {
    this.taskRepository = new TaskRepository();
    this.listTasks = this.taskRepository.getAll();
  }

  completeTask(task:Task){
    this.taskRepository.update(task);
  }

  deleteTask(task:Task){
    let taskIndex = this.listTasks.indexOf(task)
    this.listTasks.splice(taskIndex, 1);
    this.taskRepository.delete(task);
  }

  public addTask(){
    let task = new Task(this.addInput?.nativeElement.value);
    this.listTasks.push(task);
    this.taskRepository.save(task)

    if(this.addInput) this.addInput.nativeElement.value =  "";
    this.cancelButtonAdd?.nativeElement.click();
  }

  public editTask(task:Task){
    const element = document.getElementById('modalEdit') as HTMLElement;
    const myModal = new Modal(element);
    this.task = task
    myModal.show();
  }

  public confirmEdit(){
    this.task.name = this.editInput?.nativeElement.value;
    this.taskRepository.update(this.task);
    this.cancelButtonEdit?.nativeElement.click();
    this.task = new Task("");
  }
}
