import {Task} from "../model/task";

export class TaskRepository{
  private prefix = "task";
  private maxTaskIdKey = "maxTaskId"
  private maxTaskId:number;

  constructor() {
    if (localStorage.getItem(this.maxTaskIdKey) == null){
      localStorage.setItem(this.maxTaskIdKey, "0");
      this.maxTaskId = 0;
    }else {
      this.maxTaskId = Number(localStorage.getItem(this.maxTaskIdKey))
    }
  }

  public saveAll(tasks:Task[]){
    tasks.forEach(task => this.save(task));
  }

  public save(task:Task){
    task.id = this.maxTaskId++;
    localStorage.setItem(this.maxTaskIdKey, String(this.maxTaskId))
    this.persistTask(task);
  }

  public update(task:Task){
    if (typeof task.id === 'number') {
      if (this.getById(task.id)) this.persistTask(task);
    }
  }

  public getAll(): Task[]{
    let tasks = []
    for (let cont = 0; cont < this.maxTaskId; cont++){
      let task = this.getById(cont);
      if (task){
        tasks.push(task);
      }
    }
    return tasks;
  }

  private persistTask(task:Task){
    localStorage.setItem(this.prefix+task.id, JSON.stringify(task));
  }

  private getById(id:number){
    const task = localStorage.getItem(this.prefix+id);
    if (task) return JSON.parse(task);
  }
}
