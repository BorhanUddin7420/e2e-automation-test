import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly rememberMe: Locator;
    readonly forgotPassword: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMsg: Locator;
    readonly loginEmailError: Locator;

    constructor(page: Page) {
        this.page = page;

        this.email = page.getByLabel('Email:');
        this.password = page.getByLabel('Password:');
        this.rememberMe = page.getByLabel('Remember me?');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.forgotPassword = page.getByRole('link', { name: 'Forgot password?' });
        this.loginErrorMsg = page.locator('div[class="message-error validation-summary-errors"] ul li');
        this.loginEmailError = page.locator('#Email-error');

    }

    async inputEmail(cusEmail: string) {
        await this.email.type(cusEmail);
    }

    async inputPassword(cusPassword: string) {
        await this.password.type(cusPassword);
    }

   async clickLoginButton() {
        await this.loginButton.click();
    }

    getInvalidCredentailsErrorMessage(): Locator {
        return this.loginErrorMsg;
    }

    getEmailErrorMessage(): Locator {
        return this.loginEmailError;
    }



}