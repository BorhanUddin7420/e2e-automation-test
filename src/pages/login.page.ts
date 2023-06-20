import { Page } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        
    }

}