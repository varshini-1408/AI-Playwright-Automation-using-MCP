class ProductsPage {
    constructor(page) {
        this.page = page;

        this.productsTitle = page.getByText('Products', { exact: true });
        this.productItems = page.locator('[data-test="inventory-item"]');
        this.productDetails = page.locator('[data-test="inventory-container"]');
        this.productDetailName = this.productDetails.locator('[data-test="inventory-item-name"]');
        this.productDetailDescription = this.productDetails.locator('[data-test="inventory-item-desc"]');
        this.productDetailPrice = this.productDetails.locator('[data-test="inventory-item-price"]');
        this.addToCartButton = this.productDetails.getByRole('button', { name: 'Add to cart' });
        this.cartButton = page.getByRole('button', { name: /^Cart/ });
        this.backToProductsButton = page.getByRole('button', { name: 'Back to products' });
    }

    getProductDetailImage(productName) {
        return this.productDetails.getByRole('img', { name: productName });
    }

    getProduct(productName) {
        return this.productItems.filter({
            has: this.page.getByText(productName, { exact: true }),
        });
    }

    async selectProduct(productName) {
        await this.getProduct(productName)
            .getByText(productName, { exact: true })
            .click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async backToProducts() {
        await this.backToProductsButton.click();
    }
}

module.exports = { ProductsPage };