import { Component } from '@angular/core';
import {Task} from "../../../model/task";
import { ViewChild, ElementRef} from '@angular/core';
import {TaskRepository} from "../../../repository/TaskRepository";
import { Modal } from "bootstrap";
import {FormControl, FormGroup} from "@angular/forms";

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
  @ViewChild('modalAdd', {static: true}) modalAdd!: ElementRef<HTMLDivElement>
  @ViewChild('modalEdit', {static: true}) modalEdit!: ElementRef<HTMLDivElement>
  formAdd: FormGroup = new FormGroup({
    taskNameInput: new FormControl("")
  });

  formEdit: FormGroup = new FormGroup({
    taskNameEditInput: new FormControl(this.task.name)
  });


  constructor() {
    this.taskRepository = new TaskRepository();
    this.listTasks = this.taskRepository.getAll();
  }

  ngAfterViewInit(){
    this.modalAdd.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.formAdd.reset({});
    });
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
    this.formEdit.reset({
      taskNameEditInput: this.task.name
    });
    myModal.show();
  }

  public confirmEdit(){
    this.task.name = this.editInput?.nativeElement.value;
    this.taskRepository.update(this.task);
    this.cancelButtonEdit?.nativeElement.click();
    this.task = new Task("");
  }

  public upTaskPosition(task:Task){
    this.changeItemsPosition(task, -1);
  }

  public downTaskPosition(task:Task){
    this.changeItemsPosition(task, 1);
  }

  private changeItemsPosition(task:Task, value:number){
    let indexOf = this.listTasks.indexOf(task);

    if (this.listTasks[indexOf+value]){
      let taskTemp = this.listTasks.at(indexOf+value);
      this.listTasks[indexOf+value] = task;
      if (taskTemp) {
        this.listTasks[indexOf] = taskTemp
      }
    }
  }
}
