import axios from 'axios';

const KEY = 'AIzaSyAcpHf0IzTGPDAVanMggyLpav5Qbpp2L-s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});