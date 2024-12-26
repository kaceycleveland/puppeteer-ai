import { test as base } from '@playwright/test';

// Custom test fixtures
type CustomFixtures = {
  autoLogin: boolean;
  clearLocalStorage: boolean;
};

// Extend the base test
export const test = base.extend<CustomFixtures>({
  // Auto-login fixture
  autoLogin: [async ({ page }, use) => {
    // Setup: You can add your login logic here
    await use(true);
    // Cleanup: You can add cleanup logic here
  }, { auto: true }],

  // Clear localStorage fixture
  clearLocalStorage: [async ({ page }, use) => {
    await use(true);
    await page.evaluate(() => localStorage.clear());
  }, { auto: true }],
});

// Export assertions
export { expect } from '@playwright/test';