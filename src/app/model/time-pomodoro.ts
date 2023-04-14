export class TimePomodoro {

  private keyPomodoro = "pomodoroValue";
  private keyShortBreak = "shortBreakValue";
  private keyLongBreak = "longBreakValue";

  constructor() {
    if (this.getPomodoroValue() === 0){
      this.reset();
    }
  }

  getPomodoroValue(){
    return Number(localStorage.getItem(this.keyPomodoro))
  }
  getShortBreakValue(){
    return Number(localStorage.getItem(this.keyShortBreak));
  }
  getLongBreakValue(){
    return Number(localStorage.getItem(this.keyLongBreak));
  }

  setPomodoroValue(value:number){
    localStorage.setItem(this.keyPomodoro, String(value));
  }
  setShortBreakValue(value:number){
    localStorage.setItem(this.keyShortBreak, String(value));
  }
  setLongBreakValue(value:number){
    localStorage.setItem(this.keyLongBreak, String(value));
  }

  reset(){
    console.log("set values")
    this.setPomodoroValue(25);
    this.setShortBreakValue(5);
    this.setLongBreakValue(15);
  }
}
