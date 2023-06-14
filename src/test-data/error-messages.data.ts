
const registrationPageExpectedErrorList = {
    firstnameErrorMessage: 'First name is required.',
    lastnameErrorMessage: 'Last name is required.',
    emailErrorMessage: 'Email is required.',
    passwordErrorMessage: 'Password is required.',
    confirmPasswordErrorMessage: 'Password is required.',
    mismatchPasswordErrorMessage: 'The password and confirmation password do not match.',
    invalidEmailErrorMessage: 'Wrong email',
    invalidPasswordLengthErrorMessage: 'must meet the following rules: must have at least 6 characters'
}

const HomePageErrorList = {
    errorName: 'No Error'

}

export const registrationPageErrorList = registrationPageExpectedErrorList;
export const homePageErrorList = HomePageErrorList;