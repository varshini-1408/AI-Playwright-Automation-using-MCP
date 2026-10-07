# SauceDemo Application Context

## 1. Application name and URL
- Application name: SauceDemo
- URL: https://www.saucedemo.com/

## 2. Login module
Observed functionality:
- The application presents a login page at the root URL.
- The login form includes:
  - Username field
  - Password field
  - Login button
- Helper text is shown on the login page indicating accepted usernames and the password for all users.
- Observed sample username: standard_user
- Observed password: secret_sauce

Important UI elements:
- Swag Labs branding/header
- Username textbox labeled “Username”
- Password textbox labeled “Password”
- Login button labeled “Login”
- Supporting text with accepted usernames and password information

Observed user actions:
- Enter username
- Enter password
- Submit the form via the Login button

## 3. Products module
Observed functionality:
- After successful login, the app shows the Products page.
- The page displays a product listing.
- Products can be sorted using a sorting dropdown.
- The product listing includes visible product cards with name, description, price, and Add to cart actions.

Important UI elements:
- Swag Labs header
- Open Menu button
- Cart button with empty state indicator
- Page title “Products”
- Sorting dropdown with options:
  - Name (A to Z)
  - Name (Z to A)
  - Price (low to high)
  - Price (high to low)
- Product cards containing:
  - Product image
  - Product name
  - Product description
  - Price
  - Add to cart button

Observed user actions:
- Open the menu
- View cart
- Sort products
- Open a product detail page by selecting a product
- Add a product to cart

## 4. Product details
Observed functionality:
- Selecting a product from the product listing opens a product detail page.
- The detail page shows the product image, product name, description, price, and an Add to cart button.
- A Back to products button is available to return to the catalog.

Important UI elements:
- Back to products button
- Large product image
- Product name
- Product description
- Product price
- Add to cart button

Observed user actions:
- Review product details
- Add product to cart
- Return to the products list

## 5. Shopping cart
Observed functionality:
- The cart can be opened from the cart button in the header.
- The cart page displays the currently selected items and the cart state.
- The cart page includes controls to continue shopping or proceed to checkout.

Important UI elements:
- Cart header: “Your Cart”
- QTY column
- Description column
- Continue Shopping button
- Checkout button

Observed user actions:
- Review cart contents
- Continue shopping
- Proceed to checkout

## 6. Checkout
Observed functionality:
- The checkout flow starts from the cart page.
- The checkout information page includes a form for customer information.
- The form collects:
  - First Name
  - Last Name
  - Zip/Postal Code
- The page includes Cancel and Continue buttons.

Important UI elements:
- Title: “Checkout: Your Information”
- First Name textbox
- Last Name textbox
- Zip/Postal Code textbox
- Cancel button
- Continue button

Observed user actions:
- Enter checkout customer information
- Continue to the next checkout step
- Cancel checkout

## 7. Order completion
Observed functionality:
- After completing the order process, the application shows a completion page.
- The page confirms the order with a thank-you message and a pony express illustration.
- A Back Home button returns the user to the storefront.

Important UI elements:
- Header: “Checkout: Complete!”
- Pony Express image
- Heading: “Thank you for your order!”
- Confirmation copy describing the order dispatch
- Back Home button

Observed user actions:
- View confirmation
- Return to the main catalog via Back Home

## 8. Logout
Observed functionality:
- The application exposes a menu with a Logout option.
- Selecting Logout signs the user out and returns to the login page.

Important UI elements:
- Open Menu button
- Sidebar navigation with:
  - All Items
  - Dynamic Catalog
  - About
  - Logout
  - Reset App State

Observed user actions:
- Open the menu
- Select Logout
- Return to the login page

## 9. Reset application state
Observed functionality:
- The menu includes a Reset App State option.
- This was observed in the sidebar menu, but no interaction was performed during the observed usage.

Important UI elements:
- Reset App State menu item

## 10. Important UI elements for each module
The application uses a consistent pattern of UI elements across modules:
- Header with brand name and cart access
- Hamburger/menu button
- Product listings with images, names, descriptions, and prices
- Buttons for Add to cart and Remove
- Cart and checkout flow controls
- Footer links for social media and legal text

## 11. Main user journey from login to order completion
Observed user journey:
1. Open the SauceDemo site.
2. View the login page.
3. Enter a valid username and password.
4. Submit the Login form.
5. Land on the Products page.
6. View the available product list and sort options.
7. Select a product to view its details.
8. Add the product to the cart.
9. Use the cart page to review the selected item.
10. Click Checkout.
11. Enter customer information (First Name, Last Name, Zip/Postal Code).
12. Continue through checkout.
13. Reach the order completion page.
14. Read the confirmation message and click Back Home to return to the storefront.

## Notes
- This document only includes functionality observed through direct application inspection using Playwright MCP.
- No additional features or behaviors have been documented beyond what was directly observed.
