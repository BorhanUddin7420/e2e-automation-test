import { Locator, Page } from "@playwright/test"

export default class RegistrationPage {
    readonly page: Page;
    readonly genderMale: Locator;
    readonly genderFemale: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly dobDay: Locator;
    readonly dobMonth: Locator;
    readonly dobYear: Locator;
    readonly email: Locator;
    readonly companyName: Locator;
    readonly newsletter: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly firstNameError: Locator;
    readonly lastNameError: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly confirmPasswordError: Locator;
    readonly registeredEmailError: Locator;


    constructor(page: Page) {
        this.page = page;
        this.genderMale = page.locator('#gender-male');
        this.genderFemale = page.locator('#gender-female');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.dobDay = page.locator('select[name="DateOfBirthDay"]');
        this.dobMonth = page.locator('select[name="DateOfBirthMonth"]');
        this.dobYear = page.locator('select[name="DateOfBirthYear"]');
        this.email = page.locator('#Email');
        this.companyName = page.locator('#Company');
        this.newsletter = page.locator('#Newsletter');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.firstNameError = page.locator('#FirstName-error');
        this.lastNameError = page.locator('#LastName-error');
        this.emailError = page.locator('#Email-error');
        this.passwordError = page.locator('#Password-error');
        this.confirmPasswordError = page.locator('#ConfirmPassword-error');
        this.registeredEmailError = page.locator('div[class="message-error validation-summary-errors"] ul li')
    }
    

    async checkGenderCheckbox(gender: string) {
        (gender.toLowerCase() === 'female') ? await this.genderFemale.check() : await this.genderMale.check();
    }

    async inputFirstName(firsrname: string) {
        await this.firstName.type(firsrname);
    }

    async inputLastName(lastName: string) {
        await this.lastName.type(lastName);
    }

    async selectDobDay(day: string) {
        await this.dobDay.selectOption(day);
    }

    async selectDobMonth(month: string) {
        await this.dobMonth.selectOption({ label: month });
    }

    async selectDobYear(year: string) {
        await this.dobYear.selectOption(year);
    }

    async inputEmail(email: string) {
        await this.email.type(email);
    }

    async inputCompanyName(companyname: string) {
        await this.companyName.type(companyname);
    }

    async uncheckNewsletterCheckbox() {
        await this.newsletter.uncheck();
    }

    async inputPassword(password: string) {
        await this.password.type(password);
    }

    async inputConfimrPassword(confirmpassword: string) {
        await this.confirmPassword.type(confirmpassword);
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    getFirstNameErrorMessage(): Locator {
        return this.firstNameError;
    }

    getLastNameErrorMessage(): Locator {
        return this.lastNameError;
    }
    
    getEmailErrorMessage(): Locator {
        return this.emailError;
    }
    
    getPasswordErrorMessage(): Locator {
        return this.passwordError;
    }
    
    getConfirmPasswordErrorMessage(): Locator {
        return this.confirmPasswordError;
    }

    getRegisteredEmailErrorMessage():Locator{
        return this.registeredEmailError;
    }


}