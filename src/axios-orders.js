import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-learn-my-burger.firebaseio.com/'
});

export default instance;