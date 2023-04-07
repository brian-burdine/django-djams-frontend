import axios from 'axios'

export default async function getData (endpoint, request) {
    let config = {
        url: endpoint,
        baseURL: "https://8000-brianburdin-djangodjams-1qof58c44mn.ws-us93.gitpod.io/api/",
        method: request.name,
        data: request.data
    }
    let response = await axios.request(config);
    return response.data;
}