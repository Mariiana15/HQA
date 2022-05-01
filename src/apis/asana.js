import history from "../history";
import {
    ASANA_OAUTH
} from "../actions/types";
import axios from "axios";
import config from '../actions/configuration.json'

export const Code = () => async (dispatch) => {
    const response = await axios.get(config.oauthAsanaCode, {
        headers: {
            "Authorization": config.userBasic,
        }
    }).then(({ data }) => {return data});
    dispatch({ type: ASANA_OAUTH, payload: response });
}


export const Oauth = (code, code_verifier) => async (dispatch) => {
    const response = await axios.post(config.oauth2Asana, {code,code_verifier },{
        headers: {
            "Authorization": config.userBasic,
        }
    }).then(({ data }) => {return data});
   // dispatch({ type: ASANA_OAUTH, payload: response.url });
}