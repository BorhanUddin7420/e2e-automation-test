import { expect, test } from "@playwright/test";
import HomePage from "../../pages/homePage";
import RegistrationPage from "../../pages/registerPage";

test.describe('Test', () => {
    let homePage:any;
    let registrationPage:any;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        registrationPage = new RegistrationPage(page);


        await homePage.gotoHomePage('https://training.nop-station.com/');
        await homePage.clickRegisterButtonFromTopBar();

    })

    test('Customer successfully registered in ecommerce website', async ({ page }) => {

        await homePage.clickRegisterButtonFromTopBar();
    
        await registrationPage.checkGenderCheckbox('female');
        await registrationPage.inputFirstName('Sharmin');
        await registrationPage.inputLastName('Sattar');
        await registrationPage.selectDobDay('10');
        await registrationPage.selectDobMonth('October');
        await registrationPage.selectDobYear('1992');
        await registrationPage.inputEmail('sharmin.rc40253@test.com');
        await registrationPage.inputCompanyName('FAMILY-S');
        await registrationPage.uncheckNewsletterCheckbox();
        await registrationPage.inputPassword('PASS1234');
        await registrationPage.inputConfimrPassword('PASS1234');
        await registrationPage.clickRegisterButton();
    
        expect(page.url()).toContain('/registerresult/');
    
    });
})






