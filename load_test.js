import http from 'k6/http'
import { check, sleep } from 'k6'
import { FormData } from "https://jslib.k6.io/formdata/0.0.2/index.js"

const formData = new FormData()
formData.append("Hello", "world")
formData.append("Hello1", "world1")

const headers = {
  "Content-Type": `multipart/form-data; boundary=${formData.boundary}`
}

export default function () {
 
  const data = { name: 'hello', description: 'world' }
  const response = http.get('https://www.google.com')
  // check(response, { 'success login': (r) => r.status === 200 })
  sleep(0.3)
}

// const fetch = require('node-fetch');

// res = fetch('http://localhost:5173/index.html', {
//   method: 'GET', // or 'POST'
//   headers: {
//     'Content-Type': 'application/json',
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
// })
// .then(response => response.text())
// .then(data => console.log(data))
// .catch((error) => {
//   console.error('Error:', error);
// });

// console.log(res);