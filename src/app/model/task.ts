export class Task {
  private static idCounter:number = 0;
  private readonly _id:number;
  private _name:string;
  public isComplete:boolean;
  constructor(name:string) {
    this._id = Task.idCounter++;
    this._name = name;
    this.isComplete = false;
  }

  get name (){
    return this._name;
  }

  set name(name:string){
    this._name = name;
  }

  get id(){
    return this._id;
  }
}
