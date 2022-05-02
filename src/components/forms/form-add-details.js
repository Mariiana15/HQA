import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import '../styles/mariana.scss'

import history from "../../history";
import { Link } from 'react-router-dom';
import { Oauth } from '../../apis/asana';
class FormAddDetails extends React.Component {

    state = {
    };

    componentDidMount() {
        let index = document.getElementById('bodyid');
        index.classList.add("body_form");

    }

    activateCheck(name) {

        let element = document.getElementById(name);
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.setAttribute("aria-checked", "false");

        }
        else {
            element.classList.add("active");
            element.setAttribute("aria-checked", "true");

        }
    }

    Save() {
        history.push("/dashboard");
    }


    render() {

        return (
            <form class="padding-center-lef" style={{ "--size": this.props.formWith > 1200 ? (this.props.formWith * 0.001) : 1.2 + "em" }}>
                <div className="row" >
                    < div className="col form_col_details" >
                        <div class="row ">
                            <div class="col-10 offset-md-2">
                                <h3 for="exampleFormControlInput1" className="title-form "> Danos mas informacion para ajustar tu tests</h3>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-10 offset-md-1">
                                <div >
                                    <div className="mb-3">
                                        <div for="exampleFormControlInput1" className=" form_label form-label">Selecciona tu arquictectura</div>
                                        <div class="chip-group" tabindex="-1">
                                            <div class="chip chip-checkbox" onClick={() => { this.activateCheck("test") }} id="test" tabindex="0" aria-labelledby="addDramaChip">
                                                <input type="checkbox" />
                                                <i class="material-icons chip-add-icon"></i>
                                                <span id="addDramaChip">Drama</span>
                                            </div>
                                            <div class="chip chip-checkbox" tabindex="0" aria-labelledby="addComedyChip">
                                                <input type="checkbox" />
                                                <i class="material-icons chip-add-icon"></i>
                                                <span id="addComedyChip">Comedy</span>
                                            </div>
                                            <div class="chip chip-checkbox" tabindex="0" aria-labelledby="addWesternChip">
                                                <input type="checkbox" />
                                                <i class="material-icons chip-add-icon"></i>
                                                <span id="addWesternChip">Western</span>
                                            </div>
                                        </div>




                                    </div>
                                    <div className="mb-3">
                                        <h3 for="exampleFormControlTextarea1" className=" form-label">Selecciona la lista o fila de trabajo</h3>
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
                        </div>
                        <div class="row ">
                            <div class="col-2 offset-md-4">
                                <div className="btn btn__primary" ><p>Guardar</p></div>
                            </div>
                        </div>

                    </div>
                    < div className="col" >
                        <img src={logo} alt="..." className="icon_form"></img>
                    </div>
                </div>

            </form>
        )
    }
}



const mapStateToProps = state => {
    return { asanaOauth: state.streams.asanaOauth };
};

export default connect(mapStateToProps, { Oauth })(FormAddDetails);