import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import '../styles/mariana.scss'

import history from "../../history";
import { Link } from 'react-router-dom';
import { Oauth } from '../../apis/asana';
import LabelOptions from '../elements/label-options';
import config from '../utils/variables.json'

class FormAddDetails extends React.Component {

    state = {
    };

    componentDidMount() {
        let index = document.getElementById('bodyid');
        index.classList.add("body_form");

    }



    Save() {
        history.push("/dashboard");
    }




    render() {

        return (
            <form className="padding-center-lef" style={{ "--size": this.props.formWith > 1200 ? (this.props.formWith * 0.001) : 1.2 + "em" }}>
                <div className="row" >
                    < div className="col form_col_details" >
                        <div className="row ">
                            <div className="col-10 offset-md-1">
                                <h2 htmlFor="exampleFormControlInput1" className="title-form "> Danos mas informacion para ajustar tus test</h2>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-10 offset-md-1">
                                <div >
                                    <div className="mb-3">
                                        <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Selecciona las caracteristicas de tu arquictectura</div>
                                        <LabelOptions optionsLabel={config.technologies} />
                                        <br></br>

                                    </div>
                                    <div className="mb-3">
                                        <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Selecciona tecnologias a ultilizar</h3>
                                        <LabelOptions optionsLabel={config.language} />

                                        <br></br>

                                    </div>
                                    <div className="mb-3">
                                        <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Requerimientos tecnicos que deben cumplir estas HU</h3>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aqui tus requermientos"></textarea>

                                        <br></br>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-2 offset-md-4">
                                <div className="btn btn__primary" ><p>Agregar</p></div>
                            </div>
                        </div>

                    </div>
                    < div className="col-6 form_HU" >
                        <div className="row form_HU_1" >
                            <div className="col-8 offset-4 ">
                                <h3 htmlFor="exampleFormControlTextarea1" className="  title-form">Requerimientos tecnicos que deben cumplir estas HU</h3>
                            </div>
                        </div>
                        <div className="row " >
                            <div className="col-8 offset-4 ">
                                <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Requerimientos tecnicos que deben cumplir estas HU</h3>
                            </div>
                        </div>
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