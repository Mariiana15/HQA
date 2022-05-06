import history from "../history";
import {
    ASANA_OAUTH,
    ASANA_TOKEN,
    ASANA_PROJECTS,
    ASANA_SESCTIONS,
} from "../actions/types";
import axios from "axios";
import config from '../components/utils/configuration.json'

export const Code = () => async (dispatch) => {
   
    const response = await axios.get(config.asana.oauthAsanaCode, {
        headers: {
            "Authorization": config.asana.userBasic,
        }
    }).then(({ data }) => { return data });
    dispatch({ type: ASANA_OAUTH, payload: response });
}


export const Oauth = (code, code_verifier) => async (dispatch) => {
    
    const response = await axios.post(config.asana.oauth2Asana, { code, code_verifier }, {
        headers: {
            "Authorization": config.asana.userBasic,
        }
    }).then(({ data }) => { return data });
    dispatch({ type: ASANA_TOKEN, payload: response.token });
}

export const Projects = (token) => async (dispatch) => {
    
    const response = await axios.get(config.asana.asanaProjects, {
        headers: {
            "Authorization": config.asana.userBasic,
            token
        }
    }).then(({ data }) => { return data });

    dispatch({ type: ASANA_PROJECTS, payload: response });
}

export const Sections = (token, projectId) => async (dispatch) => {
    
    const response = await axios.get(config.asana.asanaSections, {
        headers: {
            "Authorization": config.asana.userBasic,
            token,
            projectId
        }
    }).then(({ data }) => { return data });
    dispatch({ type: ASANA_SESCTIONS, payload: response });
}