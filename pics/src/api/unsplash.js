import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Q8GQ2mi1Wl3yXf6tJFCHKCa6IaodjRoTwywqjEm5kv0',
    }    
});
