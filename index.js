import { createIssue } from '../github-api.js';

const form = document.getElementById('user-info-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const userInfo = {
        'name':name,
        'email':email,
        'birthdate':birthdate
    };
    createIssue(userInfo);
    document.getElementById('thank-you-message').innerText = `Thank you for submitting your information, ${name}!`;
});