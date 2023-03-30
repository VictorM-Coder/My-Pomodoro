export class Task {
  private _name:string;
  private _isComplete:boolean;
  constructor(name:string) {
    this._name = name;
    this._isComplete = false;
  }

  get name (){
    return this._name;
  }

  set name(name:string){
    this._name = name;
  }

  public complete(){
    this._isComplete = true;
  }

  public uncomplete(){
    this._isComplete = false;
  }
}
