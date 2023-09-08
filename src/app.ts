import axios from 'axios';
require('dotenv').config();


const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GoogleAPI = process.env.GOOGLE_API_KEY;

type GoogleGeoType = {
    results: { geometry: { location: {lat: number, lng: number} } }[];
    status: 'OK' | 'ZERO_RESULTS';
}

function 주소검색핸들러(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    axios.get<GoogleGeoType>(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
        )}&key=${GoogleAPI}`
        )
        .then(response => {
            if (response.data.status !== 'OK') {
                throw new Error('위치정보를 가져올수 없습니다')
            }
            const coordinates = response.data.results[0].geometry.location;
        })
        .catch(err => {
            alert(err.message);
            console.log(err);
        })
        ;
}

form.addEventListener('submit', 주소검색핸들러);