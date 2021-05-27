import axios from "axios";
import {BASE_URL} from "../constants/Constant";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 20000
});

export default instance;
