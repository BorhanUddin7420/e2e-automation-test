import { expect, test } from "../../fixtures/base.fixture";
import { faker } from '@faker-js/faker';

test.describe('Customer registration for the nopCommerce public store @FE_Reg_001', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('The customer successfully navigate to register page from home page @SC_reg_001', async ({ homePage, page }) => {

        test.step("The customer click register button from topbar", async () => {
            homePage.clickRegisterButtonFromTopBar();
        })

        test.step("The customer should be able to see the registration page", async () => {
            expect(page.url()).toContain('register');
        })

    })

    test('The customer unable to register with empty first name field @SC_reg_002', async ({ page, registerPage }) => {

        test.step('The customer has reached the registration page.', async () => {
            await page.goto('/register');
            await page.waitForURL('**\/register')
        })

        test.step('The customer input all required field without firstname', async () => {

            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password();

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputLastName(faker.person.lastName('male'));
            await registerPage.selectDobDay(customerBirthDate.getDay.toString());
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.getFullYear.toString());
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        test.step('The customer then click register button', async () => {
            await registerPage.clickRegisterButton();

        })

        test.step('The customer should see an error message indicating that the first name field is required', async () => {
            await expect(registerPage.firstNameError).toHaveText('First name is required.')
        })

    })

})






