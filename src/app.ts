require('dotenv').config();
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GoogleAPI = process.env.GOOGLE_API_KEY;

function 주소검색핸들러(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

}

form.addEventListener('submit', 주소검색핸들러);