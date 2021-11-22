import axios from 'axios';
const KEY = 'AIzaSyB7vt355aoTOWNg5Sak85LJBFrNEBH1lMw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
