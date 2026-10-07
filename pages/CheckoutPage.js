class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.checkoutButton = page.getByRole('button', { name: 'Checkout', exact: true });
        this.checkoutInformationTitle = page.getByText('Checkout: Your Information', { exact: true });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.postalCode = page.getByRole('textbox', { name: 'Zip/Postal Code' });
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });

        this.checkoutOverviewTitle = page.getByText('Checkout: Overview', { exact: true });
        this.finishButton = page.getByRole('button', { name: 'Finish', exact: true });

        this.orderCompleteTitle = page.getByText('Checkout: Complete!', { exact: true });
        this.orderConfirmation = page.getByRole('heading', {
            name: 'Thank you for your order!',
            level: 2,
        });
        this.orderDispatchConfirmation = page.getByText(
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
            { exact: true },
        );
        this.ponyExpressImage = page.getByRole('img', { name: 'Pony Express' });
        this.backHomeButton = page.getByRole('button', { name: 'Back Home', exact: true });
    }

    async startCheckout() {
        await this.checkoutButton.click();
    }

    async enterInformation(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async continueToOverview() {
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async backHome() {
        await this.backHomeButton.click();
    }
}

module.exports = { CheckoutPage };