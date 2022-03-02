const signUpForm = document.getElementById('signup');
const signUpWrapper = document.querySelector('.signup_wrapper');
const signUpText = document.querySelector('.signup_text');

const logInWrapper = document.querySelector('.login_wrapper')
const logInForm = document.getElementById('login')
const logInText = document.querySelector('.login_text');


const requestOptions = {
    method: 'POST',
};
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const signUpEmail = document.querySelector('.signup_email').value;
    const signUpPassword = document.querySelector('.signup_password').value
    if (!signUpEmail || !signUpPassword) {
        console.log('YOU MUST ENTER EMAIL AND PASSWORD')
    } else {

        fetch(`http://localhost:3000/users?email=${signUpEmail}&password=${signUpPassword}`, requestOptions)
    }
})

logInText.addEventListener('click', () => {
    signUpWrapper.style.opacity = '0'
    logInWrapper.style.display = 'flex'
})
signUpText.addEventListener('click', () => {
    signUpWrapper.style.opacity = '1'
    logInWrapper.style.display = 'none'
})
logInForm.addEventListener('submit', () => {
    const loginEmail = document.querySelector('.login_email').value
    const loginPassword = document.querySelector('.login_password').value

    fetch(`http://localhost:3000/logIn?email=${loginEmail}&password=${loginPassword}`)
})
//sdaddsad
//fdsfsfd