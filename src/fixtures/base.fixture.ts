import { test as base, Page } from '@playwright/test';
import HomePage from "../pages/home.page";
import RegistrationPage from "../pages/register.page";
import LoginPage from '../pages/login.page';

type pages = {
    homePage: HomePage;
    registerPage: RegistrationPage;
    loginPage: LoginPage;
}

const testPages = base.extend<pages>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
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