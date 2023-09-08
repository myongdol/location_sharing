const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function 주소검색핸들러(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;


}

form.addEventListener('submit', 주소검색핸들러);