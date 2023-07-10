import axios from 'axios';

const instance = axios.create({
    //baseURL for all the endpoints (database managment)
    baseURL: 'https://react-burger-46c74-default-rtdb.firebaseio.com/'
});

export default instance;