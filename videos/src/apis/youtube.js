import axios from 'axios';

const KEY = 'AIzaSyA8xJpCaFYAL_iDNPz-i0fiivCu9R2bNU4';

export default axios.create({
    baseURL: 'https:///www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


