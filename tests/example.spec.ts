import { test, expect } from './test-utils/custom-test';
import { waitForNetworkIdle, sendCommand } from './test-utils/test-helpers';

test.describe('Example Test Suite', () => {
  test('should demonstrate custom test utilities', async ({ page }) => {
    await page.goto('/');
    
    // Using custom helper
    await sendCommand(page, 'click the search entry box and fill in the input found by the name attribute `q` with the text "test search".');
    await page.getByText("Google Search").first().click();

    
    // Using built-in assertions
    // await expect(page).toHaveTitle(/Home/);
  });
});