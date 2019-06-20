import * as axios from 'axios';

import * as Config from './../constants/Config'

export default function callApi(endpoint, methot = "GET", body) {
    return axios({
        method: methot,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(erro => {
        console.log(erro)
    });
}