import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getProductTitle(): Promise<Locator> {
    return this.page.getByRole('heading', { name: 'HP Smart Tank 589 All-in-One' });
  }

  async selectQuantity(quantity: string) {
    await this.page.getByText('Quantity:1').click();
    await this.page.getByRole('option', { name: quantity, exact: true }).click();
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add to cart', exact: true }).click();
  }

  async cartSubtotal(): Promise<Locator> {
    return this.page.locator('#sw-subtotal')
  }

  async getSubtotalPrice(): Promise<string> {
    // Subtotal is usually in format "₹XXX" – extract number for later comparison if needed
    const priceText = await this.page.locator('.a-price .a-offscreen').innerText();
    return priceText;
  }

  async goToCart() {
    await this.page.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
  }
}