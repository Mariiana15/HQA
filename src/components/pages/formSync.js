import React from 'react';
import { connect } from 'react-redux';
import '../word.scss';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import '../styles/mariana.scss'

class Sync extends React.Component {

    state = {
    };

    componentDidMount() {

    }



    render() {

        return (
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-9 ">
                        <div className="padding-center">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Selecciona el tablero a trabajar</label>
                                <select className="form-select __input" required aria-label="select example">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Tablero A</option>
                                    <option value="2">Tablero B</option>
                                    <option value="3">Tablero C</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Selecciona la lista o fila de trabajo</label>
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
                            <div className="btn btn__primary" ><p>Guardar</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(Sync);
