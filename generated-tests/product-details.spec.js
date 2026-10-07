const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { users } = require('../test-data/users');

test('TC-PRODUCT-007: user can view Sauce Labs Backpack details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const { validUser } = users;
  const productName = 'Sauce Labs Backpack';

  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);
  await expect(productsPage.productsTitle).toBeVisible();

  await productsPage.selectProduct(productName);

  await expect(productsPage.productDetailName).toHaveText(productName);
  await expect(productsPage.getProductDetailImage(productName)).toBeVisible();
  await expect(productsPage.productDetailDescription).toBeVisible();
  await expect(productsPage.productDetailPrice).toBeVisible();
});
