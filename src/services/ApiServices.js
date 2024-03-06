import axios from "axios";

export const apiServices = (apiObj) => {
    return axios({
        method: apiObj.method,
        url: apiObj.url,
        headers: apiObj.headers,
        params: apiObj.params,
    });
}