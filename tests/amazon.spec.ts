import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchResultsPage } from '../pages/search-results.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { testData } from '../utils/test-data'
import { waitForNewTab } from '../utils/page-helper';

test.describe('Amazon Add to Cart Flow', () => {
  test('should search for a printer, add to cart, and verify cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);


    // 1. Go to Amazon.in
    await homePage.navigate(testData.baseUrl);

    // 2. Search for “HP smart tank”
    await homePage.searchFor(testData.searchTerm);

    // 3. Verify if the search produces results
    const searchResults = await searchResultsPage.searchResultsLoaded();
    await expect(searchResults).toBeVisible();

    // 4. Select the printer with name “Smart Tank 589”
    const newPage = await waitForNewTab(page, () => searchResultsPage.selectProduct(testData.productName))
    const productPage = new ProductPage(newPage);

    // 5. Verify if Product page opens
    const verifyProdctPageOpened = await productPage.getProductTitle();
    await expect(verifyProdctPageOpened).toBeVisible()

    // 6. Select Quantity as 2
    await productPage.selectQuantity(testData.quantity);

    // 7. Click “Add to cart”
    await productPage.addToCart();

    // 8. Verify if Cart Subtotal appears and verify the price
    const verifyCartSubtotal = await productPage.cartSubtotal();
    await expect(verifyCartSubtotal).toBeVisible()
    expect(await productPage.getSubtotalPrice()).toMatch(/₹\d{1,3}(,\d{3})*\.\d{2}/);

    // 9. Click “Go to Cart”
    await productPage.goToCart();

    // 10. Verify if Shopping Cart opens
    const cartPage = new CartPage(newPage);
    const verifyCartOpened = await cartPage.cartOpened();
    await expect(verifyCartOpened).toBeVisible();
    await expect(verifyCartOpened).toContainText('Shopping Cart');

    // 11. Verify the items in the cart including the item name and the quantity
    const verifyCartItemName = await cartPage.getItemNameInCart(testData.productName);
    await expect(verifyCartItemName).toBeVisible();
    await expect(verifyCartItemName).toContainText(testData.productName);
    await expect(await cartPage.getItemQuantityInCart()).toContainText(testData.quantity);
  });

});
