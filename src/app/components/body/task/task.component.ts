import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() public task:Task = new Task("");
  @Input() public idTask:number = 0;
  @Output() listenCompleteTask = new EventEmitter();
  @Output() listenDeleteTask = new EventEmitter();
  @Output() listenEditTask = new EventEmitter();

  @Output() listenUpTask = new EventEmitter();
  @Output() listDownTask = new EventEmitter();

  completeTask(){
    this.task.isComplete = !this.task.isComplete
    this.listenCompleteTask.emit(this.task);
  }

  deleteTask(){
    this.listenDeleteTask.emit(this.task);
  }

  editTask(){
    this.listenEditTask.emit(this.task);
  }

  upPosition(){
    this.listenUpTask.emit(this.task);
  }

  downPosition(){
    this.listDownTask.emit(this.task);
  }

}
