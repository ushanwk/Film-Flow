import {apiServices} from "../services/ApiServices";

export async function search(title) {
    const apiObj = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: title},
        headers: {
            'X-RapidAPI-Key': '53a6c8d528msh47cb5fcab43f9aep1371ffjsn74637cf64eb4',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    }

    return apiServices(apiObj);
}