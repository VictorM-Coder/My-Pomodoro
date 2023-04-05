export class Task {
  public id?:number;
  public name:string;
  public isComplete:boolean;
  constructor(name:string) {
    this.name = name;
    this.isComplete = false;
  }
}
