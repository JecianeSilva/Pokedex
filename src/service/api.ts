import axios from "axios";

const api = axios.create({
    baseURL: "http://pokeapi.co/api/v2",
});

export default api;