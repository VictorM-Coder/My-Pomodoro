import {Task} from "../model/task";

export class TaskRepository{
  public save(tasks:Task[]){
    localStorage.setItem(String("listTasks"), JSON.stringify(tasks));
  }

  public getAll(): Task[]{
    const tasks = localStorage.getItem("listTasks");
    if (tasks) return JSON.parse(tasks);
    return [];
  }
}
