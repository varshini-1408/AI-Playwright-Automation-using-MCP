const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { users } = require('../test-data/users');

test('TC-PRODUCT-008: user adds Sauce Labs Backpack to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const { validUser } = users;
  const productName = 'Sauce Labs Backpack';

  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);
  await expect(productsPage.productsTitle).toBeVisible();

  await productsPage.selectProduct(productName);
  await productsPage.addToCart();
  await cartPage.openCart();

  await expect(cartPage.cartTitle).toBeVisible();
  await expect(cartPage.getProductName(productName)).toHaveText(productName);
});
