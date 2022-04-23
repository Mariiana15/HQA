import React from 'react';
import { connect } from 'react-redux';
import '../word.scss';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';

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
                            <h1 className="h1-intro">Conectate</h1>
                            <h3 className='h3-intro'>Con tus herramientas de gestion</h3>
                        </div>
                        <div className="col-2">
                            <div className="row padding-center ">
                                <div className="col">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/asana-226537.png" alt="..." class="rounded-circle icono-sync_bussi"></img>
                                </div>
                                <div className="col">
                                    <img src={logo} alt="..." class="icono-sync"></img>
                                </div>
                                <div className="col">
                                    <img src="" alt="..." class="rounded-circle"></img>
                                </div>
                                <div className="col">
                                    <img src="" alt="..." class="rounded-circle"></img>
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
