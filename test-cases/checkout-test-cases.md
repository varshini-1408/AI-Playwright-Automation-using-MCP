# SauceDemo Checkout Test Cases

## Test Case 1: Complete checkout with a product in the cart

- **Test Case ID:** TC-CHECKOUT-009 (REQ-009)
- **Test Case Name:** Logged-in user can complete checkout for a product in the cart
- **Module:** Checkout
- **Priority:** High
- **Preconditions:** User is logged in and Sauce Labs Backpack is present in the cart.
- **Test Data:**
  - First Name: Jane
  - Last Name: Doe
  - Zip/Postal Code: 12345
  - Product: Sauce Labs Backpack
- **Steps:**
  1. Open the cart and select Checkout.
  2. Enter the required first name, last name, and zip/postal code.
  3. Select Continue to proceed to the order overview.
  4. Complete the order using the available checkout action.
- **Expected Result:** Checkout completes and the order completion page is displayed.

## Test Case 2: Verify order confirmation and return to products

- **Test Case ID:** TC-CHECKOUT-010 (REQ-010)
- **Test Case Name:** User can verify the order confirmation and return to the products page
- **Module:** Order Confirmation
- **Priority:** High
- **Preconditions:** User is logged in and Sauce Labs Backpack is present in the cart.
- **Test Data:**
  - First Name: Jane
  - Last Name: Doe
  - Zip/Postal Code: 12345
  - Product: Sauce Labs Backpack
- **Steps:**
  1. Open the cart and select Checkout.
  2. Enter the required first name, last name, and zip/postal code.
  3. Select Continue to proceed to the order overview.
  4. Complete the order.
  5. Verify the order completion page's confirmation message.
  6. Select Back Home.
- **Expected Result:** The order completion page displays “Thank you for your order!” and its order dispatch confirmation copy. Selecting Back Home returns the user to the Products page.
