const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { users } = require('../test-data/users');

test('TC-CHECKOUT-009/010: user completes checkout and returns to products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const { validUser } = users;
  const productName = 'Sauce Labs Backpack';
  const checkoutInformation = {
    firstName: 'Jane',
    lastName: 'Doe',
    postalCode: '12345',
  };

  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);
  await expect(productsPage.productsTitle).toBeVisible();

  await productsPage.selectProduct(productName);
  await expect(productsPage.productDetailName).toHaveText(productName);
  await productsPage.addToCart();
  await cartPage.openCart();
  await expect(cartPage.cartTitle).toBeVisible();
  await expect(cartPage.getProductName(productName)).toHaveText(productName);

  await checkoutPage.startCheckout();
  await expect(checkoutPage.checkoutInformationTitle).toBeVisible();
  await checkoutPage.enterInformation(
    checkoutInformation.firstName,
    checkoutInformation.lastName,
    checkoutInformation.postalCode,
  );
  await checkoutPage.continueToOverview();
  await expect(checkoutPage.checkoutOverviewTitle).toBeVisible();

  await checkoutPage.finishOrder();
  await expect(checkoutPage.orderCompleteTitle).toBeVisible();
  await expect(checkoutPage.orderConfirmation).toBeVisible();
  await expect(checkoutPage.orderDispatchConfirmation).toBeVisible();

  await checkoutPage.backHome();
  await expect(productsPage.productsTitle).toBeVisible();
  await expect(page).toHaveURL(/\/inventory\.html$/);
});
