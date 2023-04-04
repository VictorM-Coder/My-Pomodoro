import {Component, Input} from '@angular/core';
import {Task} from "../../../model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() public task:Task = new Task("");
  @Input() public idTask:number = 0;
  mostrar(){
    console.log(this.task)
  }

}
