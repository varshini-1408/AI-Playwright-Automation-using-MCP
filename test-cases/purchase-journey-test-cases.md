# SauceDemo Purchase Journey Test Cases

## Test Case 1: Complete a purchase from login through order confirmation

- **Test Case ID:** TC-PURCHASE-011 (REQ-001, REQ-007, REQ-008, REQ-009, REQ-010)
- **Test Case Name:** User completes the Sauce Labs Backpack purchase journey
- **Module:** Login, Products, Shopping Cart, Checkout, and Order Confirmation
- **Priority:** High
- **Preconditions:** User is on the SauceDemo login page.
- **Test Data:**
  - Username: `standard_user`
  - Password: `secret_sauce`
  - Product: Sauce Labs Backpack
  - First Name: Jane
  - Last Name: Doe
  - Postal Code: 12345
- **Steps:**
  1. Enter the valid username and password, then select Login.
  2. Verify that the Products page is displayed.
  3. Select Sauce Labs Backpack.
  4. Verify the product details, including image, name, description, and price.
  5. Add Sauce Labs Backpack to the cart.
  6. Open the cart.
  7. Verify that Sauce Labs Backpack is present in the cart.
  8. Select Checkout.
  9. Enter the first name, last name, and postal code.
  10. Select Continue to proceed to the checkout overview.
  11. Verify that the checkout overview is displayed.
  12. Select Finish to complete the order.
  13. Verify that the order completion page displays “Thank you for your order!”.
  14. Select Back Home.
- **Expected Result:** The user completes checkout for Sauce Labs Backpack, sees the order completion message, and returns to the Products page using Back Home.
