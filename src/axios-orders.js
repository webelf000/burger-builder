import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-ccda5.firebaseio.com/'
});

export default instance;