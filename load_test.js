import http from 'k6/http'
import { check, sleep } from 'k6'
import { FormData } from "https://jslib.k6.io/formdata/0.0.2/index.js"

const formData = new FormData()
formData.append("Hello", "world")
formData.append("Hello1", "world1")

const headers = {
  "Content-Type": `multipart/form-data; boundary=${formData.boundary}`
}

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1000,
  // A string specifying the total duration of the test run.
  duration: '30m',
};

export default function () {
 
  const data = { name: 'hello', description: 'world' }
  const response = http.get('http://localhost:5173')
  // console.log(response.status)
  check(response, { 'success login': (response) => response.status === 200 })
  sleep(0.3)
}

//      
// ✗ success login for 10000 vus and 30 seconds
//       ↳  88% — ✓ 36784 / ✗ 4838

// ✗ success login for 1000 vus and 30 minutes
//   ↳  100% — ✓ 3556330     ✗ 0