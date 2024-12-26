import { Page } from '@playwright/test';

export async function waitForNetworkIdle(page: Page, timeout = 2000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });
}

export async function clearInputField(page: Page, selector: string): Promise<void> {
  await page.click(selector, { clickCount: 3 });
  await page.keyboard.press('Backspace');
}

export async function scrollToBottom(page: Page): Promise<void> {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
}

export async function waitForAnimation(page: Page): Promise<void> {
  // Wait for any CSS animations to complete
  await page.evaluate(() => {
    return Promise.all(
      document.getAnimations().map(animation => animation.finished)
    );
  });
}