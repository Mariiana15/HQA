import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import Circle from '../elements/circle-icon';

class Sync extends React.Component {

    state = {
    };

    componentDidMount() {

    }

    elementXs() {
        let ch_icon = {
            "xs_asana": "icon-a",
            "xs_trello": "icon-trello",
            "xs_jira": "icon-jira",
            "xs_circle_asana": "icon-top icon-circle",
            "xs_circle_jira": "icon-left icon-circle",
            "xs_circle_trello": "icon-right icon-circle",
            "xs_icon": "icono-sync"
        };

        if (window.innerWidth < 500) {
            ch_icon = {
                "xs_asana": "icon-a-xs",
                "xs_trello": "icon-trello-xs",
                "xs_jira": "icon-jira-xs",
                "xs_circle_asana": "icon-top-xs icon-circle-xs",
                "xs_circle_jira": "icon-left-xs icon-circle-xs",
                "xs_circle_trello": "icon-right-xs icon-circle-xs",
                "xs_icon": "icono-sync-xs"
            };
        }
        return ch_icon;
    }

    render() {
        let ch_icon = this.elementXs();
        return (
            <div>
                <div className="container heigh-sync">
                    <div className="row padding-center justify-content-start ">
                        <div className="col-md-4 col-xs-8">
                            <img src={logo} alt="..." class="icon-bg"></img>
                            <h1 className="h1-intro">Sincroniza</h1>
                            <h3 className='h3-intro'>Con tus tareas y con tus historias de usuario</h3>
                        </div>
                        <div className="col-6 icons-sync">
                            <div className="row ">
                                <div className="col">
                                    <Circle container={`container ${ch_icon["xs_circle_asana"]}`} h2="Asana" h3="Sincroniza tu tablero" img="https://cdn.iconscout.com/icon/free/png-256/asana-226537.png" imgClass={ch_icon["xs_asana"]} ></Circle>
                                </div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col">
                                    <img src={logo} alt="..." class={ch_icon["xs_icon"]}></img>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                    <Circle container={`container ${ch_icon["xs_circle_jira"]}`} h2="Jira" h3="Sincroniza tu tablero" img="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" imgClass={ch_icon["xs_jira"]} ></Circle>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col">
                                    <Circle container={`container ${ch_icon["xs_circle_trello"]}`} h2="Trello" h3="Sincroniza tu tablero" img="https://icons-for-free.com/download-icon-logo+social+trello+icon-1320194696754621808_512.png" imgClass={ch_icon["xs_trello"]} ></Circle>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div >
        )
    }
}


export default connect()(Sync);
