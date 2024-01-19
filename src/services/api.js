import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json, text/plain, */*',
        Referer: 'https://main--iridescent-cajeta-f5977d.netlify.app/'
    } // Set your default base URL here
});

export default api;
