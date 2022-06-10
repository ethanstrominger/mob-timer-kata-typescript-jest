class MobTimer {}

test("Mob timer can be created", () => {
  expect(new MobTimer()).toBeInstanceOf(MobTimer);
});

test.skip("Default duration is 5 minutes", () => {
  expect(new MobTimer().durationMinutes).toEqual(5);
});

test.skip("Set duration to 3.5 minutes", () => {
  const mobTimer = new MobTimer();
  mobTimer.durationMinutes = 3.5;
  expect(mobTimer.durationMinutes).toEqual(3.5);
});

test.skip("Initial status - status is READY", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.status).toEqual("READY");
});

test.skip("Start timer - status is RUNNING", () => {});
test.skip("Pause timer - status is PAUSED", () => {});
test.skip("Resume timer - status is RUNNING", () => {});
test.skip("Get time string before started", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.timeRemainingString).toEqual("0:00");
});

test.skip("Get time string after started", () => {});
