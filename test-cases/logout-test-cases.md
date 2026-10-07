# SauceDemo Logout Test Cases

## Test Case 1: Logged-in user can log out

- **Test Case ID:** TC-LOGOUT-012 (REQ: User Logout)
- **Test Case Name:** Logged-in user logs out and returns to the login page
- **Module:** Logout
- **Priority:** High
- **Preconditions:** User is on the SauceDemo login page.
- **Test Data:**
  - Username: `standard_user`
  - Password: `secret_sauce`
- **Steps:**
  1. Enter the valid username and password, then select Login.
  2. Verify that the Products page is displayed.
  3. Open the application menu.
  4. Select Logout.
- **Expected Result:** The user is logged out and returned to the SauceDemo login page.
