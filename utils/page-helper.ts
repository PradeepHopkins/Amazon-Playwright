import { Page } from "@playwright/test";

/**
 * Helper to handle actions that open a new tab.
 * @param page - The current Playwright Page
 * @param action - The action that triggers a new tab (e.g. click)
 * @returns The newly opened Page (tab)
 */
export async function waitForNewTab(page: Page, action: () => Promise<void>): Promise<Page> {
  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"), // Wait for new tab
    action()                             // Perform the action that triggers it
  ]);

  await newPage.waitForLoadState();       // Ensure tab is fully loaded
  return newPage;
}
