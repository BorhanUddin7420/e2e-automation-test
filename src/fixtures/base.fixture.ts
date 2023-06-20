import { test as base, Page } from '@playwright/test';
import RegistrationPage from "../pages/register.page";
import LoginPage from '../pages/login.page';
import CommonPage from '../pages/common.page';

type pages = {
    commonPage: CommonPage;
    registerPage: RegistrationPage;
    loginPage: LoginPage;
}

const testPages = base.extend<pages>({

    commonPage: async ({ page }, use) => {
        await use(new CommonPage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }

})

export const test = testPages;
export const expect = testPages.expect;