import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';
import '../styles/mariana.scss'

import history from "../../history";
import { Link } from 'react-router-dom';
import { Oauth, Projects, Sections } from '../../apis/asana';
import { GetTasksRich } from '../../apis/webSocket';
import { asanaSetProjectId, asanaSetSectionId, setTokenHack, setUS } from '../../actions'
import { GetToken } from '../utils'
import { GetProtocol } from '../../apis/configBack';


class FormSync extends React.Component {

    state = {
        project: false, indexProject: -1, indexSection: -1
    };

    componentDidMount() {
        let index = document.getElementById('bodyid');
        index.classList.add("body_form");
        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        let code = params.get('code');
        if (code != undefined) {
            let token = GetToken()
            this.props.setTokenHack(token);
            this.props.Oauth(code, sessionStorage.getItem('code_verifier'));
            this.props.GetProtocol(token.AccessToken, "tasks")
        }
    }



    loadProjects() {
        if (this.props.asanaToken && !this.state.project) {
            this.props.Projects(this.props.asanaToken)
            this.setState({ project: true })
        }
    }

    projects() {
        if (this.props.asanaProjects) {
            let list = [];
            this.props.asanaProjects.forEach((element, index) => {
                list.push(<option key={index} value={element.gid}>{element.name}</option>)
            })
            return list;
        }
    }

    sections() {
        if (this.props.asanaSections) {
            let list = [];
            this.props.asanaSections.forEach((element, index) => {
                list.push(<option key={index} value={element.gid}>{element.name}</option>)
            })
            return list;
        }
    }

    selectProject(e) {
        let index = e.target.selectedIndex;
        this.setState({ indexProject: index });
        this.props.asanaSetProjectId(this.props.asanaProjects[index].gid);
        this.props.Sections(this.props.asanaToken, this.props.asanaProjects[index].gid);
    }

    selectSection(e) {
        let index = e.target.selectedIndex;
        this.setState({ indexSection: index });
        this.props.asanaSetSectionId(this.props.asanaSections[index].gid);
    }

    Save() {
        
        let ws = GetTasksRich(this.props.asanaToken, this.props.asanaSectionId, this.props.protocol.protocol, this)
        this.timeout = setTimeout((ws) => {
            ws.close()
        }, this.props.protocol.timer)
    }


    render() {

        return (
            <form class=" padding-center" style={{ "--size": this.props.formWith > 1200 ? (this.props.formWith * 0.001) : 1.2 + "em" }}>
                <div class="row justify-content-md-center">
                    <div class="row ">
                        <div class="col-5 offset-md-4">
                            <h1 for="exampleFormControlInput1" className="title-form "> Sincroniza tu worksapece de trabajo</h1>
                        </div>
                    </div>
                    <div class="col-6">
                        <div >
                            <div className="mb-3">
                                <div for="exampleFormControlInput1" className=" form_label form-label">Selecciona el tablero a trabajar</div>
                                <select className="form-select __input" onFocus={() => { this.loadProjects() }} required aria-label="select example"
                                    value={this.state.indexProject != -1 ? this.props.asanaProjects[this.state.indexProject].gid : null} onChange={(e) => { this.selectProject(e) }}
                                >
                                    {this.projects()}
                                </select>
                            </div>
                            <div className="mb-3">
                                <h3 for="exampleFormControlTextarea1" className=" form_label">Selecciona la lista o fila de trabajo</h3>
                                <select className="form-select __input" required aria-label="select example"
                                    value={this.state.indexSection != -1 ? this.props.asanaSections[this.state.indexSection].gid : null} onChange={(e) => { this.selectSection(e) }}
                                >
                                    {this.sections()}
                                </select>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-3">
                            <Link to="/dashboard">
                                <div className="btn btn__primary" onClick={() => { this.Save() }} ><p>Guardar</p></div>
                            </Link>
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
    return {
        asanaOauth: state.streams.asanaOauth,
        asanaToken: state.streams.asanaToken,
        asanaProjects: state.streams.asanaProjects,
        asanaSections: state.streams.asanaSections,
        asanaSectionId: state.streams.asanaSectionId,
        protocol: state.streams.protocol,
        token: state.streams.token,
    };
};

export default connect(mapStateToProps, { Oauth, Projects, asanaSetProjectId, Sections, asanaSetSectionId, setTokenHack, GetProtocol, setUS })(FormSync);