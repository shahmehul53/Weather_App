import axios from  'axios';

export default axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/weather",
    Headers: {
        APPID: '971d3aad3083a2a5c2fce97ca8006581'
    }
})