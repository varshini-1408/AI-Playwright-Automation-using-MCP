const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { users } = require('../test-data/users');

test('TC-LOGIN-002: invalid credentials prevent login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const { invalidUser } = users;

  await loginPage.open();
  await loginPage.login(invalidUser.username, invalidUser.password);

  await expect(page.getByRole('alert')).toBeVisible();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByText('Products', { exact: true })).toHaveCount(0);
});
