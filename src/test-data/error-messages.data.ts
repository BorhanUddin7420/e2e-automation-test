
const RegistrationPageExpectedErrorList = {
    firstnameErrorMessage: 'First name is required.',
    lastnameErrorMessage: 'Last name is required.',
    emailErrorMessage: 'Email is required.',
    passwordErrorMessage: 'Password is required.',
    confirmPasswordErrorMessage: 'Password is required.',
    mismatchPasswordErrorMessage: 'The password and confirmation password do not match.',
    invalidEmailErrorMessage: 'Wrong email',
    invalidPasswordLengthErrorMessage: 'must have at least 6 characters',
    alreadyRegisteredErrorMessage: 'The specified email already exists'
}

const HomePageErrorList = {
    errorName: 'No Error'
}

const LoginPageErrorList = {
    invalidCredentailsErrorMessage: 'The credentials provided are incorrect',
    invalidEmailErrorMessage:'Please enter your email',
    noCustomerEmailErrorMessage: 'No customer account found',
    wrongEmailErrorMessage : 'Wrong email'
}

export const registrationPageErrorList = RegistrationPageExpectedErrorList;
export const homePageErrorList = HomePageErrorList;
export const loginPageErrorList = LoginPageErrorList;