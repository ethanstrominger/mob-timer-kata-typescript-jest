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

test.skip("Get time string before started", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.timeRemainingString).toEqual("0:00");
});

test.skip("Initial status - status is READY", () => {});

test.skip("Start timer - status is RUNNING", () => {});

test.skip("Seconds remaining equals 0 before started", () => {
});
test.skip("Seconds remaing equals 5 * 60 after started", () => {})

test.skip("Get time string before started", () => {
  const mobTimer = new MobTimer();
  expect(mobTimer.timeRemainingString).toEqual("0:00");
});
test.skip("Get time string after started", () => {});
