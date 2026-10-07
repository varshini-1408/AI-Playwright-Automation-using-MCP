# SauceDemo Login Test Cases

## Test Case 1: Valid user login

- **Test Case ID:** TC-LOGIN-001 (REQ-001)
- **Test Case Name:** User logs in with valid credentials
- **Module:** Login
- **Priority:** High
- **Preconditions:** User is on the SauceDemo login page.
- **Test Data:**
  - Username: `standard_user`
  - Password: `secret_sauce`
- **Steps:**
  1. Enter the valid username.
  2. Enter the valid password.
  3. Click Login.
- **Expected Result:** The user successfully logs in, the Products page is
  displayed, and the browser URL is
  `https://www.saucedemo.com/inventory.html`.

## Test Case 2: Invalid user login

- **Test Case ID:** TC-LOGIN-002 (REQ-002)
- **Test Case Name:** Application prevents login with invalid credentials
- **Module:** Login
- **Priority:** High
- **Preconditions:** User is on the SauceDemo login page.
- **Test Data:**
  - Username: `invalid_user`
  - Password: `invalid_password`
- **Steps:**
  1. Enter the invalid username.
  2. Enter the invalid password.
  3. Click Login.
- **Expected Result:** The application displays a login error. The user
  remains on the login page and is not redirected to the Products page.
- **Verification Note:** REQ-002 requires this behavior, but invalid-login
  behavior is not documented in `docs/application-context.md`. The error's
  exact text and presentation are unspecified and are not assumed.
