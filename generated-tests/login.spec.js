const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { users } = require('../test-data/users');

test('TC-LOGIN-001: user logs in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const { validUser } = users;

  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);

  await expect(page.getByText('Products', { exact: true })).toBeVisible();
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );
});
