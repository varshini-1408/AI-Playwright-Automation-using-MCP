const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MenuPage } = require('../pages/MenuPage');
const { users } = require('../test-data/users');

test('TC-LOGOUT-012: logged-in user logs out and returns to the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MenuPage(page);
  const { validUser } = users;

  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();

  await menuPage.openMenu();
  await menuPage.logout();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(loginPage.username).toBeVisible();
});
