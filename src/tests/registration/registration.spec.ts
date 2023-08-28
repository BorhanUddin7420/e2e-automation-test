import { expect, test } from "../../fixtures/base.fixture";
import { faker } from '@faker-js/faker';
import { registrationPageErrorList } from "../../test-data/error-messages.data";
import ENV from "../../utils/env"

test.describe('Customer registration for the nopCommerce public store @FE_Reg_001', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(ENV.BASE_URL);
    });

    test('The customer successfully navigate to register page from home page @SC_reg_001 @smoke', async ({ commonPage, page }) => {
        await test.step("When customer click register button from topbar", async () => {
            await commonPage.clickRegisterButtonFromTopBar();
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step("Then customer should be able to see the registration page", async () => {
            await expect(page).toHaveURL(/.*register/);
        })

    });

    test('The customer unable to register without input any field value @SC_reg_002', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('And customer click register button without input any value', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see multiple required filed error message', async () => {
            await expect.soft(registerPage.getFirstNameErrorMessage()).toHaveText(registrationPageErrorList.firstnameErrorMessage);
            await expect.soft(registerPage.getLastNameErrorMessage()).toHaveText(registrationPageErrorList.lastnameErrorMessage);
            await expect.soft(registerPage.getEmailErrorMessage()).toHaveText(registrationPageErrorList.emailErrorMessage);
            await expect.soft(registerPage.getPasswordErrorMessage()).toHaveText(registrationPageErrorList.passwordErrorMessage);
            await expect.soft(registerPage.getConfirmPasswordErrorMessage()).toHaveText(registrationPageErrorList.confirmPasswordErrorMessage);
        })

    });

    test('The customer unable to register without firstname value @SC_reg_003', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required field without firstname', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password();

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that the firstname field is required', async () => {
            await expect(registerPage.getFirstNameErrorMessage()).toHaveText(registrationPageErrorList.firstnameErrorMessage);
        })

    });

    test('The customer unable to register without lastname value @SC_reg_004', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required field without lastname', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password();

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that the email field is required', async () => {
            await expect(registerPage.getLastNameErrorMessage()).toHaveText(registrationPageErrorList.lastnameErrorMessage);
        })

    });

    test('The customer unable to register without email address @SC_reg_005', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required field without email address', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password();

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that the email address field is required', async () => {
            await expect(registerPage.getEmailErrorMessage()).toHaveText(registrationPageErrorList.emailErrorMessage);
        })

    });

    test('The customer unable to register without password @SC_reg_006', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required field without password field value', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password();

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that the password field is required', async () => {
            await expect(registerPage.getConfirmPasswordErrorMessage()).toHaveText(registrationPageErrorList.mismatchPasswordErrorMessage);
        })

    });

    test('The customer unable to register without confirm password @SC_reg_007', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required field without confirm password field value', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password();

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that the password field is required', async () => {
            await expect(registerPage.getConfirmPasswordErrorMessage()).toHaveText(registrationPageErrorList.passwordErrorMessage);
        })

    });

    test('The customer unable to register with mismatching password and Confirm Password @SC_reg_008', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required field without confirm password field value', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password({ length: 8 });

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            //different confirm password
            await registerPage.inputConfimrPassword(faker.internet.password({ length: 10, memorable: true }));

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that the password is mismatched', async () => {
            await expect(registerPage.getConfirmPasswordErrorMessage()).toHaveText(registrationPageErrorList.mismatchPasswordErrorMessage);
        })

    });

    test('The customer unable to register with invalid email in Email field @SC_reg_009', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required with invalid email address', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password({ length: 10, memorable: true });

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.domainName());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that invalid email address', async () => {
            await expect(registerPage.getEmailErrorMessage()).toHaveText(registrationPageErrorList.invalidEmailErrorMessage);
        })

    });


    test('The customer unable to register with invalid length of password @SC_reg_010', async ({ page, registerPage }) => {
        await test.step('Given customer has reached the registration page.', async () => {
            await page.goto(`${ENV.BASE_URL}/register`);
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step('When customer input all required with invalid length of password', async () => {
            const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
            const password = faker.internet.password({ length: 3, memorable: true });

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
            await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
            await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
            await registerPage.inputEmail(faker.internet.email());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('And customer click register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then customer should see an error message indicating that invalid length of password', async () => {
            await expect(registerPage.getPasswordErrorMessage()).toContainText(registrationPageErrorList.invalidPasswordLengthErrorMessage);
        })

    });

    test.describe.serial.only('[Run serially]', () => {
        const user = {
            email: faker.internet.email(),
        };
        test('The customer successfully register with all valid user data @SC_reg_011 @smoke', async ({ page, registerPage }) => {
            await test.step('Given customer has reached the registration page.', async () => {
                await page.goto(`${ENV.BASE_URL}/register`);
                await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
            })

            await test.step('When customer input all required field with valid data', async () => {
                const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
                const password = faker.internet.password({ length: 12, memorable: true });

                await registerPage.checkGenderCheckbox('male')
                await registerPage.inputFirstName(faker.person.firstName());
                await registerPage.inputLastName(faker.person.lastName());
                await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
                await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
                await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
                await registerPage.inputEmail(user.email);
                await registerPage.inputCompanyName(faker.company.name());
                await registerPage.uncheckNewsletterCheckbox();
                await registerPage.inputPassword(password);
                await registerPage.inputConfimrPassword(password);

            })

            await test.step('And customer click register button', async () => {
                await registerPage.clickRegisterButton();
            })

            await test.step('Then customer should successfully navigate to registered success page', async () => {
                await expect(page).toHaveURL(/.*registerresult/);
            })

        });

        test('The customer unable to register with already registered email @SC_reg_012', async ({ page, registerPage }) => {
            await test.step('Given customer has reached the registration page.', async () => {
                await page.goto(`${ENV.BASE_URL}/register`);
                await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
            })

            await test.step('When customer input all required field with already registered email', async () => {
                const customerBirthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });
                const password = faker.internet.password({ length: 12, memorable: true });

                await registerPage.checkGenderCheckbox('male')
                await registerPage.inputFirstName(faker.person.firstName());
                await registerPage.inputLastName(faker.person.lastName());
                await registerPage.selectDobDay(customerBirthDate.toLocaleString('default', { day: 'numeric' }));
                await registerPage.selectDobMonth(customerBirthDate.toLocaleString('default', { month: 'long' }));
                await registerPage.selectDobYear(customerBirthDate.toLocaleString('defaule', { year: 'numeric' }));
                await registerPage.inputEmail(user.email);
                await registerPage.inputCompanyName(faker.company.name());
                await registerPage.uncheckNewsletterCheckbox();
                await registerPage.inputPassword(password);
                await registerPage.inputConfimrPassword(password);

            })

            await test.step('And customer click register button', async () => {
                await registerPage.clickRegisterButton();
            })

            await test.step('Then customer should see an error message indicating that email address already registered', async () => {
                await expect(registerPage.getRegisteredEmailErrorMessage()).toHaveText(registrationPageErrorList.alreadyRegisteredErrorMessage);
            })

        });
    });
})