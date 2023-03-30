export class Task {
  private _name:string;
  public isComplete:boolean;
  constructor(name:string) {
    this._name = name;
    this.isComplete = false;
  }

  get name (){
    return this._name;
  }

  set name(name:string){
    this._name = name;
  }
}
