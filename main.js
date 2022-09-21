import { API } from "./config/API.js";

try {
    API.get('statistics').then(response=> {console.log(response)})
} catch(error) {
    throw new Error(error.response.message)
}