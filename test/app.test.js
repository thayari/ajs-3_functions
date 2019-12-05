import healthBar from '../src/app';

test('Health higher than 50', () => {
  expect(healthBar({ name: 'Маг', health: 70 })).toBe('healthy');
});

test('Health between 15 and 50', () => {
  expect(healthBar({ name: 'Маг', health: 45 })).toBe('wounded');
});

test('Health lower than 15', () => {
  expect(healthBar({ name: 'Маг', health: 5 })).toBe('critical');
});
