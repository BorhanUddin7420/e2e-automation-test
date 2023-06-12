import { Locator, Page } from "@playwright/test";

export default class HomePage {
    readonly page: Page;
    readonly registerTopBarButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerTopBarButton = page.getByRole('link', { name: 'Register' });
    }

    async gotoHomePage(testURL: string) {
        await this.page.goto(testURL);
    }

    async clickRegisterButtonFromTopBar(){
        await this.registerTopBarButton.click({});
    }




}