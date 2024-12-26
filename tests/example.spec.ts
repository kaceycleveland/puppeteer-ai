import { test, expect } from './test-utils/custom-test';
import { waitForNetworkIdle, clearInputField } from './test-utils/test-helpers';

test.describe('Example Test Suite', () => {
  test('should demonstrate custom test utilities', async ({ page }) => {
    await page.goto('/');
    
    // Using custom helper
    await waitForNetworkIdle(page);
    
    // Using built-in assertions
    await expect(page).toHaveTitle(/Home/);
  });

  test('should use custom fixtures', async ({ page, autoLogin }) => {
    // autoLogin fixture is automatically applied
    await page.goto('/dashboard');
    
    // Verify we're logged in
    await expect(page.locator('.user-profile')).toBeVisible();
  });
});