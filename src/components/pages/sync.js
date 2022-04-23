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


    render() {

        return (
            <div>
                <div className="container heigh-sync">
                    <div className="row padding-center ">
                        <div className="col-4">

                            <img src={logo} alt="..." class="icon-bg"></img>
                            <h1 className="h1-intro">Conectate</h1>
                            <h3 className='h3-intro'>Con tus herramientas de gestion</h3>
                        </div>
                        <div className="col-8  icons-sync">
                            <div className="row ">
                                <div className="col">
                                    <Circle container="container icon-top icon-circle" h2="Asana" h3="Sincroniza tu tablero" img="https://cdn.iconscout.com/icon/free/png-256/asana-226537.png" imgClass="icon-a" ></Circle>
                                </div>
                                <div className="col">
                                    <img src={logo} alt="..." class="icono-sync"></img>
                                </div>
                                <div className="col">
                                    <Circle container="container icon-left icon-circle" h2="Jira" h3="Sincroniza tu tablero" img="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" imgClass="icon-jira" ></Circle>

                                </div>
                                <div className="col">
                                    <Circle container="container icon-right icon-circle" h2="Trello" h3="Sincroniza tu tablero" img="https://icons-for-free.com/download-icon-logo+social+trello+icon-1320194696754621808_512.png" imgClass="icon-trello" ></Circle>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default connect()(Sync);
