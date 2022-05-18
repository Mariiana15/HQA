import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import '../styles/form.scss'

import history from "../../history";
import { Link } from 'react-router-dom';
import { Oauth } from '../../apis/asana';
import LabelOptions from '../elements/label-options';
import config from '../utils/variables.json';
import { SetParamsTech } from '../../apis/configBack';
import { openMenu, setMenu, setUS } from '../../actions';
import Elayout from '../elements/elayout';
import { GetTasksRichBD } from '../../apis/webSocket';

class FormAddDetails extends React.Component {

    state = { text: "" };

    componentDidMount() {

        if (!this.props.typeWindow) {
            let index = document.getElementById('bodyid');
            index.classList.add("body_form");
        }

    }

    getOptionsSelect(id) {

        let opInd = document.getElementById(id);
        let opts = opInd.getElementsByClassName('active');
        let e = "";
        opts.forEach(element => {
            e = e + element.getElementsByTagName('span')[0].innerText + " ";
        })
        return e;
    }

    Save() {

        let arq = this.getOptionsSelect('op1');
        let tech = this.getOptionsSelect('op2');
        SetParamsTech(this.props.token.AccessToken, tech, arq, this.state.text, this.props.formObj.hid)
        this.props.openMenu("timer");
        this.props.setUS(null);
        this.props.setMenu(<Elayout title="Genial" text='Hemos actualizado correctamente la "User Story"' classT= "tanks_menu_page"></Elayout>);
        let ws = GetTasksRichBD(this.props.token.AccessToken, this.props.asanaSectionId, this.props.protocol.protocol, this)
        this.timeout = setTimeout(() => {
            ws.close()
        }, this.props.protocol.timer, ws)

        // history.push("/dashboard");
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
                    <h2 htmlFor="exampleFormControlInput1" className="title-form "> Necesitamos mas informacion para tu test</h2>
                </div>
            </div>
            <div className="row ">
                <div className={src.bodyForm}>
                    <div >
                        <div className="mb-3 form_tech_sec">
                            <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Selecciona las caracteristicas de tu arquictectura</div>
                            <LabelOptions optionsLabel={config.technologies} opId="op1" />
                        </div>
                        <div className="mb-3 form_tech_sec">
                            <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Selecciona tecnologias a ultilizar</h3>
                            <LabelOptions optionsLabel={config.language} opId="op2" />
                        </div>
                        <div className="mb-3 form_tech_sec">
                            <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">Requerimientos tecnicos que deben cumplir estas HU</h3>
                            <textarea className="form-control" value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }} id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aqui tus requermientos"></textarea>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className={src.bt}>
                    <div className="btn btn__primary" onClick={() => { this.Save() }}><p>Agregar</p></div>
                </div>
            </div>

        </div>

        let col2 = < div className={src.bodyUS} >
            <div className="row form_HU_1" >
                <div className={src.bodyUSDet}>
                    <h3 htmlFor="exampleFormControlTextarea1" className="  title-form">{this.props.formObj.name}</h3>
                </div>
            </div>
            <div className="row " >
                <div className={src.bodyUSDet}>
                    <h3 htmlFor="exampleFormControlTextarea1" className=" form-label">{this.props.formObj.notes}</h3>
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
    return {
        asanaOauth: state.streams.asanaOauth,
        asanaToken: state.streams.asanaToken,
        asanaSectionId: state.streams.asanaSectionId,
        protocol: state.streams.protocol,
        token: state.streams.token,
    };
};

export default connect(mapStateToProps, { Oauth, openMenu, setMenu, GetTasksRichBD, setUS })(FormAddDetails);