import { Statuses } from "./Statuses";

export class MobTimer {
  start() {
    this.status = Statuses.Running;
  }
  durationMinutes: number = 5;
  timeRemainingString: string = "0:00";
  status: Statuses = Statuses.Ready;
}
