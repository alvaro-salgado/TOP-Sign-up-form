const password = document.getElementById('user_password');

const passwordConfirmation = document.getElementById('user_password_confirmation');

const form = document.querySelector('.contact-form');


form.addEventListener('submit', (event)=>{
    if (password.textContent == passwordConfirmation.textContent){
        passwordConfirmation.validity("Password does not match")
        console.log('validationworking')
    }
})
