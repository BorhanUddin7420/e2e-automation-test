import { faker } from "@faker-js/faker";
import { expect, test } from "../fixtures/base.fixture";
import { loginPageErrorList } from "../test-data/error-messages.data";
import ENV from "../utils/env"


test.describe('Customer login for the nopCommerce public store @FE_Login_003', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ENV.BASE_URL);
    });

    test('The customer successfully navigate to login page from home page @SC_Login_001 @smoke', async ({ commonPage, page }) => {
        await test.step('When customer click log in button from topbar', async () => {
            await commonPage.clickLoginButtonFromTopBar();
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })

        await test.step("Then customer should be able to see the login page", async () => {
            await expect(page).toHaveURL(/.*login/);
        })
    });

    test('The customer unable to login with registered valid email and wrong password @SC_Login_002', async ({ page, loginPage }) => {
        await test.step('Given customer has reached the login page.', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input registered valid email and wrong password', async () => {
            const wrongPassword = faker.internet.password({ length: 12 });
            await loginPage.inputEmail(ENV.TEST_CUSTOMER_EMAIL);
            await loginPage.inputPassword(wrongPassword);
        })

        await test.step('And customer click log in button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('Then customer should see wrong credentials error message', async () => {
            await expect(loginPage.getInvalidCredentailsErrorMessage()).toHaveText(loginPageErrorList.invalidCredentailsErrorMessage);
        })

    });

    test('The customer unable to login with not registered email and valid password @SC_Login_003', async ({ page, loginPage }) => {
        await test.step('Given customer has reached the login page.', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })
        await test.step('When customer input unregistered email and valid password', async () => {
            await loginPage.inputEmail(faker.internet.email());
            await loginPage.inputPassword(ENV.TEST_CUSTOMER_PASSWORD);
        })

        await test.step('And customer click log in button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('Then customer should see wrong credentials error message', async () => {
            await expect(loginPage.getInvalidCredentailsErrorMessage()).toHaveText(loginPageErrorList.noCustomerEmailErrorMessage);
        })
    });

    test('The customer unable to login without email @SC_Login_004', async ({ page, loginPage }) => {
        await test.step('Given customer has reached the login page.', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })
        await test.step('When customer try to login without email', async () => {
            await loginPage.inputPassword(ENV.TEST_CUSTOMER_PASSWORD);
        })

        await test.step('And customer click log in button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('Then customer should see email input field error message', async () => {
            await expect(loginPage.getEmailErrorMessage()).toHaveText(loginPageErrorList.invalidEmailErrorMessage);
        })
    });

    test('The customer unable to login without password @SC_Login_005', async ({ page, loginPage }) => {
        await test.step('Given customer has reached the login page.', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })
        await test.step('When customer try to login without password', async () => {
            await loginPage.inputEmail(ENV.TEST_CUSTOMER_EMAIL);
        })

        await test.step('And customer click log in button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('Then customer should see wrong credentials error message', async () => {
            await expect(loginPage.getInvalidCredentailsErrorMessage()).toHaveText(loginPageErrorList.invalidCredentailsErrorMessage);
        })
    });

    test('The customer unable to login with invalid email @SC_Login_006', async ({ page, loginPage }) => {
        await test.step('Given customer has reached the login page.', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input invalid email and valid password', async () => {
            await loginPage.inputEmail(faker.internet.domainName());
            await loginPage.inputPassword(ENV.TEST_CUSTOMER_PASSWORD);
        })

        await test.step('And customer click log in button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('Then customer should see wrong credentials error message', async () => {
            await expect(loginPage.getEmailErrorMessage()).toHaveText(loginPageErrorList.wrongEmailErrorMessage);
        })
    });


    test('The customer successfully login with valid registered email and password @SC_Login_006 @smoke', async ({ page, loginPage, commonPage }) => {
        await test.step('Given customer has reached the login page.', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input valid email and password', async () => {
            await loginPage.inputEmail(ENV.TEST_CUSTOMER_EMAIL);
            await loginPage.inputPassword(ENV.TEST_CUSTOMER_PASSWORD);
        })

        await test.step('And customer click log in button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('Then customer should successfully login', async () => {
            await expect(commonPage.getlogOutTopBarButton(), 'should be logged in').toBeVisible();
        })
    });



})

