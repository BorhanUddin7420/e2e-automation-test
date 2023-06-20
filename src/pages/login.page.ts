import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly loginTopBarButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginTopBarButton = page.getByRole('link', {name: 'Log in'})
    }

    async clickLoginButtonFromTopBar(){
        await this.loginTopBarButton.click();
    }

}