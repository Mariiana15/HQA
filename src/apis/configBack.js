import history from "../history";
import {
    PROTOCOL,
    TOKEN,
} from "../actions/types";
import axios from "axios";
import config from '../components/utils/configuration.json'

export const GetHackToken = (id, username, password) => async (dispatch) => {

    const response = await axios.post(config.back.token, { id, username, password }, {
        headers: {
            "Authorization": config.back.userBasic,
        }
    }).then(({ data }) => { return data });
    sessionStorage.setItem("token", response.AccessToken)
    sessionStorage.setItem("refToken", response.RefreshToken)
    sessionStorage.setItem("atExpires", response.AtExpires)
    let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Number(response.AtExpires) * 1000)
    console.log(date)
    dispatch({ type: TOKEN, payload: response });
}

export const RefreshToken = (token, refresh_token) => async (dispatch) => {

    const response = await axios.post(config.back.refreshToken, { refresh_token }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log("Refresh")
    let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Number(response.AtExpires) * 1000)
    console.log(date)

    dispatch({ type: TOKEN, payload: response });

}

export const DeleteToken = (token) => async (dispatch) => {

    const response = await axios.post(config.back.deleteToken, {}, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
}

export const GetProtocol = (token, query) => async (dispatch) => {

    const response = await axios.get(config.webSocket.protocol, {
        headers: {
            "Authorization": "Bearer " + token,
        },
        params: { q: query }
    }).then(({ data }) => { return data });

    dispatch({ type: PROTOCOL, payload: response });
}