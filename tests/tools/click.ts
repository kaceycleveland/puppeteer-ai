import { Page } from "@playwright/test";
import { tool } from "ai";
import { z } from "zod";

export const click = (page: Page) => tool({
    description: 'Clicks the element on a page described by the given text.',
    parameters: z.object({
      text: z.string().describe('The text to search for to click.'),
    }),
    execute: async ({ text }) => {
        page.getByText(text).locator('visible=true').first().click();
    },
  })