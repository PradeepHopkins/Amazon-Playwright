import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async searchFor(searchTerm: string) {
    await this.page.getByRole('searchbox', { name: 'Search Amazon' }).fill(searchTerm);
    await this.page.getByRole('button', { name: 'Go', exact: true }).click();
  }

}
