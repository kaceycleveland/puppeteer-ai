import { openai } from '@ai-sdk/openai';
import { Page } from '@playwright/test';
import { tool } from 'ai';
import { generateText } from "ai"
import { click } from '../tools/click';
import { fillByName, fillByLabel } from '../tools/fill';

export async function waitForNetworkIdle(page: Page, timeout = 2000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });
}

export async function sendCommand(page: Page, prompt: string): Promise<void> {
  const content = await page.content();
  const { text } = await generateText({
    model: openai('gpt-4o-mini'),
    tools: {
      click: click(page),
      fillByLabel: fillByLabel(page),
      fillByName: fillByName(page)
    },
    prompt: `Given the page described by the following HTML source:
    ${content}
    
    ${prompt}`,
  });
  console.log('test output');
  console.log(text);
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