import { Page } from "@playwright/test";
import { tool } from "ai";
import { z } from "zod";

export const fillByLabel = (page: Page) => tool({
    description: 'Fills a `input` or `textarea` element on a page.',
    parameters: z.object({
      text: z.string().describe('The `label` or `aria-label` for the given `input` or `textarea` element.'),
      fill: z.string().describe('What text fill the found input element with.')
    }),
    execute: async ({ text, fill }) => {
        page.getByLabel(text).first().fill(fill);
    },
  })

  export const fillByName = (page: Page) => tool({
    description: 'Fills a `input` or `textarea` element on a page.',
    parameters: z.object({
      text: z.string().describe('The `name` attribute for the given `input` or `textarea` element.'),
      fill: z.string().describe('What text fill the found input element with.')
    }),
    execute: async ({ text, fill }) => {
        page.locator(`[name='${text}']`).fill(fill);
    },
  })