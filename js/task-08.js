
const form = document.querySelector('.login-form');

form.addEventListener('submit', btnSubmit);

function btnSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password},
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Fill in all fields')
    }
    const userInfo = {email: email.value, Password: password.value};
    console.log(userInfo);
    event.currentTarget.reset();
}
