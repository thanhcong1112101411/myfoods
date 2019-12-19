import axios from 'axios';
import {baseUrl} from './shared/utility';

const instance = axios.create({
    baseURL: baseUrl
});

export default instance;