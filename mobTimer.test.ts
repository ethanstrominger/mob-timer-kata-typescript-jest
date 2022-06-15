import { MobTimer } from "./MobTimer";
import { Statuses } from "./Statuses";

test("Mob timer can be created", () => {
  expect(new MobTimer()).toBeInstanceOf(MobTimer);
});

test("Default duration is 5 minutes", () => {
  expect(new MobTimer().durationMinutes).toEqual(5);
});

test("Set duration to 3.5 minutes", () => {
  const mobTimer = new MobTimer();
  mobTimer.durationMinutes = 3.5;
  expect(mobTimer.durationMinutes).toEqual(3.5);
});

test("Get time string before started", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.timeRemainingString).toEqual("0:00");
});

test("Initial status - status is READY", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.status).toEqual(Statuses.Ready);
});

test("Start timer - status is RUNNING", () => {
  const mobTimer = new MobTimer();
  mobTimer.start();
  expect(mobTimer.status).toEqual(Statuses.Running);
});

test.skip("Seconds remaining equals 0 before started", () => {
});
test.skip("Seconds remaing equals 5 * 60 after started", () => {})

test.skip("Get time string before started", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.timeRemainingString).toEqual("0:00");
});
test.skip("Get time string after started", () => {});
