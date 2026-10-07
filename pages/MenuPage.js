class MenuPage {
    constructor(page) {
        this.page = page;

        this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
    }

    async openMenu() {
        await this.openMenuButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}

module.exports = { MenuPage };
