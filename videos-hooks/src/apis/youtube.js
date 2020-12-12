import axios from 'axios';

const KEY = 'AIzaSyBrThlSsr1oMxlrOh7EKn5Ks3YgQxznjFg';

export default axios.create({
    baseURL: 'https:///www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


