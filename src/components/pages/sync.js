import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import Circle from '../elements/circle-icon';
import { Code } from '../../apis/asana';
import { GetToken } from '../utils'
import { GetValidateSync } from '../../apis/configBack';
import { Oauth } from '../../apis/asana';
import { Link } from 'react-router-dom';

import { GetHackToken, RefreshToken, DeleteToken, GetProtocol } from '../../apis/configBack'

class Sync extends React.Component {

    state = {
    };

    componentDidMount() {

        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        let code = params.get('code');
        if (code !== undefined) {
            let token = GetToken()
            this.props.Oauth(code, sessionStorage.getItem('code_verifier'), token.AccessToken);
            this.props.GetValidateSync(token.AccessToken)
            this.timeout = setTimeout(() => {
                if (this.props.validate) {
                    //       this.u.push("/")
                }

            }, 200)
        }
        else {
            this.timeout = setTimeout(() => {
                this.props.Code(this.props.token.AccessToken);
            }, 200)
        }

    }

    getCodeVerifier() {

        sessionStorage.setItem("code_verifier", this.props.asanaOauth.code_verifier)
        return this.props.asanaOauth.url;
    }

    elementXs() {

        let ch_icon = {
            "xs_asana": "icon-a",
            "xs_trello": "icon-trello",
            "xs_jira": "icon-jira",
            "xs_circle_asana": "icon-top icon-circle",
            "xs_circle_jira": "icon-left icon-circle",
            "xs_circle_trello": "icon-right icon-circle",
            "xs_icon": "icono-sync",
            "icon_bg": "icon-bg"
        };
        if (window.innerWidth < 800) {
            ch_icon = {
                "xs_asana": "icon-a-xs",
                "xs_trello": "icon-trello-xs",
                "xs_jira": "icon-jira-xs",
                "xs_circle_asana": "icon-top-xs icon-circle-xs",
                "xs_circle_jira": "icon-left-xs icon-circle-xs",
                "xs_circle_trello": "icon-right-xs icon-circle-xs",
                "xs_icon": "icono-sync-xs",
                "icon_bg": "icon-bg-xs"
            };
        }
        return ch_icon;
    }


    render() {

        let ch_icon = this.elementXs();
        return (
            <div className="sync" websocket={this.ws} >
                <div className="container">
                    <div className="row padding-center justify-content-start ">
                        <div className="col-md-3 col-xs-12">
                            <img src={logo} alt="..." className={ch_icon["icon_bg"]}></img>
                            <h1 className="h1-intro">Sincroniza</h1>
                            <h3 className='h3-intro'>Con tus tareas y con tus historias de usuario</h3>
                        </div>
                        <div className="col-6 offset-md-1 icons-sync">
                            <div className="row ">
                                <div className="col icon_sync_oauth">
                                    <Link to="/form/sync">
                                        <Circle start={this.props.validate !== undefined? true : false} container={`container ${ch_icon["xs_circle_asana"]}`} h2="Asana" h3="Sincroniza tu tablero" img="https://cdn.iconscout.com/icon/free/png-256/asana-226537.png" imgClass={ch_icon["xs_asana"]} ></Circle>
                                    </Link>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-2 sync_haq ">
                                    <img src={logo} alt="..." className={ch_icon["xs_icon"]}></img>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col icon_sync_oauth_disable_jira" onClick={() => { }}>
                                    <Circle container={`container ${ch_icon["xs_circle_jira"]}`} h2="Jira" h3="Sincroniza tu tablero" img="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" imgClass={ch_icon["xs_jira"]} ></Circle>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col icon_sync_oauth_disable">
                                    <a href='/' onClick={() => { }}>
                                        <Circle container={`container ${ch_icon["xs_circle_trello"]}`} h2="Trello" h3="Sincroniza tu tablero" img="https://icons-for-free.com/download-icon-logo+social+trello+icon-1320194696754621808_512.png" imgClass={ch_icon["xs_trello"]} ></Circle>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div >
        )
    }
}



const mapStateToProps = state => {
    return {
        asanaOauth: state.streams.asanaOauth,
        token: state.streams.token,
        protocol: state.streams.protocol,
        validate: state.streams.validate,

    };
};



export default connect(mapStateToProps, { Code, GetHackToken, RefreshToken, DeleteToken, GetProtocol, GetValidateSync, Oauth })(Sync);
