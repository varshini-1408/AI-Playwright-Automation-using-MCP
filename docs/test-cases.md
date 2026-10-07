# SauceDemo Test Cases

These cases were derived from the supplied requirements and checked against
`docs/application-context.md`. REQ-002 is included as requested but marked
pending live verification because its error behavior is not documented in the
application context.

## TC-001 - Log in with valid credentials

- **Test Case ID:** TC-001 (REQ-001)
- **Test Case Name:** User can log in with valid credentials
- **Module:** Login
- **Priority:** High
- **Preconditions:** User is on the SauceDemo login page.
- **Test Data:**
  - Username: `standard_user`
  - Password: `secret_sauce`
- **Steps:**
  1. Enter the valid username.
  2. Enter the valid password.
  3. Select Login.
- **Expected Result:** Login succeeds, the Products page is displayed, and the
  browser URL is `https://www.saucedemo.com/inventory.html`.

## TC-002 - Reject invalid login credentials

- **Test Case ID:** TC-002 (REQ-002)
- **Test Case Name:** Invalid credentials produce an error
- **Module:** Login
- **Priority:** High
- **Preconditions:** User is on the SauceDemo login page.
- **Test Data:** A username and password that are not valid SauceDemo credentials.
- **Steps:**
  1. Enter invalid credentials.
  2. Select Login.
- **Expected Result:** The application displays an error in response to the
  invalid login, as required by REQ-002. The specific error text and presentation
  have not been observed and require live verification.
- **Status:** Pending live verification; invalid-login error behavior is not
  documented in `docs/application-context.md`.

## TC-003 - Add a product to the cart

- **Test Case ID:** TC-003 (REQ-003)
- **Test Case Name:** Logged-in user can add a product to the cart
- **Module:** Products and Shopping Cart
- **Priority:** High
- **Preconditions:** User is logged in and the Products page is displayed.
- **Test Data:** Sauce Labs Backpack.
- **Steps:**
  1. Select Add to cart for Sauce Labs Backpack.
  2. Open the cart.
- **Expected Result:** The cart displays Sauce Labs Backpack.

## TC-004 - Remove a product from the cart

- **Test Case ID:** TC-004 (REQ-004)
- **Test Case Name:** User can remove a product from the cart
- **Module:** Shopping Cart
- **Priority:** Medium
- **Preconditions:** User is logged in and the cart contains Sauce Labs Backpack.
- **Test Data:** Sauce Labs Backpack.
- **Steps:**
  1. Open the cart.
  2. Select the available Remove control for Sauce Labs Backpack.
- **Expected Result:** Sauce Labs Backpack is no longer displayed in the cart.

## TC-005 - Complete checkout and confirm the order

- **Test Case ID:** TC-005 (REQ-005, REQ-006)
- **Test Case Name:** User completes checkout and sees order confirmation
- **Module:** Checkout and Order Completion
- **Priority:** High
- **Preconditions:** User is logged in and the cart contains Sauce Labs Backpack.
- **Test Data:**
  - First Name: Test
  - Last Name: Customer
  - Zip/Postal Code: 12345
- **Steps:**
  1. Open the cart and select Checkout.
  2. Enter the first name, last name, and zip/postal code.
  3. Select Continue and proceed through the available checkout controls to
     complete the order.
- **Expected Result:** Checkout completes and the application displays the
  order completion page with “Thank you for your order!” and the order
  confirmation message.
