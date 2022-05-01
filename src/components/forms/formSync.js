import React from 'react';
import { connect } from 'react-redux';
import '../word.scss';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import '../styles/mariana.scss'
import history from "../../history";
import { Link } from 'react-router-dom';
import { Oauth } from '../../apis/asana';

class FormSync extends React.Component {

    state = {
    };

    componentDidMount() {
        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        let code = params.get('code');
        if (code != undefined) {
            this.props.Oauth(code, sessionStorage.getItem('code_verifier'));
        }
    }

    Save() {
        history.push("/dashboard");
    }


    render() {
        return (
            <form class=" padding-center">
                <div class="row justify-content-md-center">
                    <div class="col-9 ">
                        <div >
                            <div className="mb-3">
                                <h3 for="exampleFormControlInput1" className="form-label form_label">Selecciona el tablero a trabajar</h3>
                                <select className="form-select __input" required aria-label="select example">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Tablero A</option>
                                    <option value="2">Tablero B</option>
                                    <option value="3">Tablero C</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <h3 for="exampleFormControlTextarea1" className="form-label form_label">Selecciona la lista o fila de trabajo</h3>
                                <select className="form-select __input" required aria-label="select example">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Lista A</option>
                                    <option value="2">Lista B</option>
                                    <option value="3">Lista  C</option>
                                </select>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-3">
                            <div className="btn btn__primary" onClick={() => { this.Save() }} >
                                <Link to="/dashboard" className="item">
                                    <p>Guardar</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-1 offset-md-11">

                            <img src={logo} alt="..." className="icon_form"></img>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}



const mapStateToProps = state => {
    return { asanaOauth: state.streams.asanaOauth };
};

export default connect(mapStateToProps, { Oauth })(FormSync);