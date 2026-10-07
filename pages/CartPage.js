class CartPage {
    constructor(page) {
        this.page = page;

        this.cartButton = page.getByRole('button', { name: /^Cart/ });
        this.cartTitle = page.getByText('Your Cart', { exact: true });
        this.cartItems = page.locator('[data-test="inventory-item"]');
    }

    async openCart() {
        await this.cartButton.click();
    }

    getCartItem(productName) {
        return this.cartItems.filter({
            has: this.page.getByText(productName, { exact: true }),
        });
    }

    getProductName(productName) {
        return this.getCartItem(productName).locator('[data-test="inventory-item-name"]');
    }

    getProductDescription(productName) {
        return this.getCartItem(productName).locator('[data-test="inventory-item-desc"]');
    }

    getProductPrice(productName) {
        return this.getCartItem(productName).locator('[data-test="inventory-item-price"]');
    }

    getProductQuantity(productName) {
        return this.getCartItem(productName).locator('[data-test="item-quantity"]');
    }
}

module.exports = { CartPage };