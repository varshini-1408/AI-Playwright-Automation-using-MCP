# SauceDemo Automation Requirements

## REQ-001 - Valid User Login

The user should be able to log into SauceDemo using valid credentials.

### Acceptance Criteria

1. User can enter a valid username.
2. User can enter a valid password.
3. User can click the Login button.
4. Successful login navigates the user to the Products page.
5. The inventory URL is displayed after successful login.

---

## REQ-002 - Invalid User Login

The application should prevent login when invalid credentials are provided.

### Acceptance Criteria

1. User enters invalid login credentials.
2. User clicks the Login button.
3. The application displays a login error.
4. User remains on the login page.
5. User is not redirected to the Products page.

---

## REQ-003 - Add Product To Cart

A logged-in user should be able to add a product to the shopping cart.

### Acceptance Criteria

1. User logs in successfully.
2. User selects a product.
3. User adds the product to the cart.
4. The cart reflects the added product.

---

## REQ-004 - Remove Product From Cart

A user should be able to remove a product from the shopping cart.

### Acceptance Criteria

1. User has a product in the cart.
2. User opens the cart.
3. User removes the product.
4. The product is no longer present in the cart.

---

## REQ-005 - Checkout

A user should be able to complete checkout after adding a product to the cart.

### Acceptance Criteria

1. User has a product in the cart.
2. User starts checkout.
3. User enters the required checkout information.
4. User continues through the checkout process.
5. User can complete the order.

---

## REQ-006 - Order Completion

After successful checkout, the application should display an order completion confirmation.

### Acceptance Criteria

1. User completes checkout successfully.
2. The order completion page/message is displayed.
3. The user can return to the product catalog.

## REQ-007 - Product Selection

A logged-in user should be able to view products and select a product.

### Acceptance Criteria

1. User logs in successfully.
2. Products page is displayed.
3. User can view available products.
4. User can select a product.
5. Product details are displayed.

---

## REQ-008 - Add Product To Cart

A logged-in user should be able to add a product to the shopping cart.

### Acceptance Criteria

1. User logs in successfully.
2. User selects a product.
3. User adds the product to the cart.
4. The cart reflects the added product.
5. The selected product appears in the cart.

## REQ-009 - Checkout

A logged-in user with a product in the cart should be able to complete checkout.

### Acceptance Criteria

1. User is logged in.
2. User has a product in the cart.
3. User can proceed to checkout.
4. User can enter the required checkout information.
5. User can continue to the order overview.
6. User can complete the order.
7. The order confirmation is displayed.

---

## REQ-010 - Order Confirmation

After successfully completing checkout, the user should see an order confirmation.

### Acceptance Criteria

1. Order submission is successful.
2. Order confirmation is displayed.
3. The confirmation indicates that the order was successfully placed.
4. The user can return to the products page.

