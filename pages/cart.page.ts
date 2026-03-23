import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async cartOpened(): Promise<Locator> {
    return this.page.getByRole('heading', { name: 'Shopping Cart' });
  }

  async getItemNameInCart(productName: string): Promise<Locator> {
    return this.page.getByRole('link', { name: productName });
    // this.page.locator('.sc-list-item-content .a-truncate-full, .sc-product-title');
  }

  async getItemQuantityInCart(): Promise <Locator> {
    return this.page.locator('.a-stepper-inner-container')
  }

}
