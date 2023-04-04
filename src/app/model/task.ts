export class Task {
  private static idCounter:number = 0;
  public id:number;
  public name:string;
  public isComplete:boolean;
  constructor(name:string) {
    this.id = Task.idCounter++;
    this.name = name;
    this.isComplete = false;
  }
}
