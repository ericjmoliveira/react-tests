import { test, expect } from 'vitest';

import { sum } from './sum';

test('if the sum result is 5', () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
