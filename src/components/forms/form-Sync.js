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
            <form class=" padding-center" style={{"--size": this.props.formWith > 1200 ? (this.props.formWith * 0.001) : 1.2+ "em" }}>
                <div class="row justify-content-md-center">
                <div class="row ">
                        <div class="col-10 offset-md-2">
                        <h2 for="exampleFormControlInput1" className="title-form "> Sincroniza tu worksapece de trabajo</h2>
                        </div>
                    </div>
                    <div class="col-9 ">
                        <div >
                            <div className="mb-3">
                                <div for="exampleFormControlInput1" className=" form_label form-label">Selecciona el tablero a trabajar</div>
                                <select className="form-select __input" required aria-label="select example">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Tablero A</option>
                                    <option value="2">Tablero B</option>
                                    <option value="3">Tablero C</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <h3 for="exampleFormControlTextarea1" className=" form_label">Selecciona la lista o fila de trabajo</h3>
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


export default connect()(Sync);
