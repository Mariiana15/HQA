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

        if (!this.props.typeWindow) {
            let index = document.getElementById('bodyid');
            index.classList.add("body_form");
        }
    
    }

    Save() {
        history.push("/dashboard");
    }

    render() {

        let src;
        if (this.props.typeWindow === undefined) {
            src = {
                classForm: "padding-center-lef",
                col: "col form_col_details",
                bodyForm: "col-10 offset-md-1",
                bodyUS: "col-6 form_HU",
                bodyUSDet: "col-8 offset-4 ",
                bt: "col-2 offset-md-4"
            }
        }
        else {
            src = {
                classForm: "form_menu_tech",
                col: "col-12 form_col_details",
                bodyForm: "col-10 offset-md-1",
                bodyUS: "col-10 form_HU",
                bodyUSDet: "col-12 offset-md-1 ",
                bt: "col-2 offset-md-3"
            }
        }

        let col1 = < div className={src.col} >
            <div className="row ">
                <div className={src.bodyForm}>
                    <h2 htmlFor="exampleFormControlInput1" className="title-form "> Danos mas informacion para ajustar tus test</h2>
                </div>
            </div>
            <div className="row ">
                <div className={src.bodyForm}>
                    <div >
                        <div className="mb-3 form_tech_sec">
                            <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Selecciona las caracteristicas de tu arquictectura</div>
                            <LabelOptions optionsLabel={config.technologies} />
                        </div>
                        <div className="mb-3 form_tech_sec">
                            <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Selecciona tecnologias a ultilizar</h3>
                            <LabelOptions optionsLabel={config.language} />
                        </div>
                        <div className="mb-3 form_tech_sec">
                            <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Requerimientos tecnicos que deben cumplir estas HU</h3>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aqui tus requermientos"></textarea>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className={src.bt}>
                    <div className="btn btn__primary" ><p>Agregar</p></div>
                </div>
            </div>

        </div>

        let col2 = < div className={src.bodyUS} >
            <div className="row form_HU_1" >
                <div className={src.bodyUSDet}>
                    <h3 htmlFor="exampleFormControlTextarea1" className="  title-form">Requerimientos tecnicos que deben cumplir estas HU</h3>
                </div>
            </div>
            <div className="row " >
                <div className={src.bodyUSDet}>
                    <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Requerimientos tecnicos que deben cumplir estas HU</h3>
                </div>
            </div>
            <img src={logo} alt="..." className="icon_form"></img>
        </div>

        let form;
        if (this.props.typeWindow) {
            form = <div className="row" >
                {col2}
                {col1}
            </div>
        }
        else {
            form = <div className="row" >
                {col1}
                {col2}
            </div>
        }

        return (
            <form className={src.classForm} style={{ "--size": this.props.formWith > 1200 ? (this.props.formWith * 0.001) : 1.2 + "em" }}>
                {form}
            </form>
        )
    }
}



const mapStateToProps = state => {
    return { asanaOauth: state.streams.asanaOauth };
};

export default connect(mapStateToProps, { Oauth })(FormAddDetails);