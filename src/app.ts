import axios from 'axios';
require('dotenv').config();


const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GoogleAPI = process.env.GOOGLE_API_KEY;

declare var ol: any;
 
function searchAddressHandler(event: Event) {
  event.preventDefault();
 
  const coordinates = {lat: 40.41, lng: -73.99}; // Google API에서 좌표를 가져올 수 없음, 더미 API 사용
 
  document.getElementById('map')!.innerHTML = ''; // <div id="map">에서 <p> 제거
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}

type GoogleGeoType = {
    results: { geometry: { location: {lat: number, lng: number} } }[];
    status: 'OK' | 'ZERO_RESULTS';
}

// function 주소검색핸들러(event: Event) {
//     event.preventDefault();
//     const enteredAddress = addressInput.value;

//     axios.get<GoogleGeoType>(`
//     https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
//         enteredAddress
//         )}&key=${GoogleAPI}`
//         )
//         .then(response => {
//             if (response.data.status !== 'OK') {
//                 throw new Error('위치정보를 가져올수 없습니다')
//             }
//             const coordinates = response.data.results[0].geometry.location;
//             const map = new google.maps.Map(document.getElementById("map"), {
//                 center: coordinates,
//                 zoom:10
//             });

//             new google.maps.Marker({position: coordinates, map: map})
//         })
//         .catch(err => {
//             alert(err.message);
//             console.log(err);
//         })
//         ;
// }

// form.addEventListener('submit', 주소검색핸들러);
form.addEventListener('submit', searchAddressHandler);