import { test as base } from '@playwright/test';
import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registerPage";

type pages = {
    homePage: HomePage;
    registerPage: RegistrationPage,

}

const testPages = base.extend<pages>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;