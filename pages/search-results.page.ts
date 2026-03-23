import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchResultsLoaded(): Promise<Locator> {
    return this.page.locator('[data-component-type="s-search-results"]');
  }
  
  async selectProduct(productName: string) {
    await this.page.getByRole('link', { name: productName, exact: true }).click();
  }

}
