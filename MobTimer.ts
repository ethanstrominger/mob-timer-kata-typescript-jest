import { Statuses } from "./Statuses";

export class MobTimer {
  timeRemaining: number = 0;

  start() {
    this._status = Statuses.Running;
    this.timeRemaining = this.durationMinutes * 60;
    this.timeRemainingString = this.format();
  }

  durationMinutes: number = 5;
  timeRemainingString: string = this.format();
  _status: Statuses = Statuses.Ready;

  private format(): string {
    const date = new Date(0);
    date.setSeconds(this.timeRemaining);
    return date.toISOString().substring(14, 19)
  }

  decreaseSeconds(seconds:number){
    this.timeRemaining = this.timeRemaining-seconds;
    
  }

  get status() {
    return this._status
  }
}
