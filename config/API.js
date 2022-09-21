import axios from "axios";

select.addEventListener('input', (e) => log(e))

const API = axios.create({
    baseURL: import.meta.env.VITE_RAPIDAPI_BASE_URL,
    headers:{
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST
    }
})

export default API;
