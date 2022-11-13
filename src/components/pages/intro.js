import React from 'react';
import { connect } from 'react-redux';
import '../styles/intro.scss';
import { pageDash, setMenu, setUS } from '../../actions';
import { GetHackToken, RefreshToken, DeleteToken } from '../../apis/configBack'
import { GetTasksRichBD } from '../../apis/webSocket';
import { GetProtocol } from '../../apis/configBack';
import { CodeVerifier, Oauth } from '../../apis/asana'
import logo from '../../images/logo3.png';

import { Code } from '../../apis/asana';

var pjson = require('../../../package.json');

class Intro extends React.Component {

    state = { us: null };

    componentDidMount() {

        this.timeout = setTimeout(() => {
            this.props.Code(this.props.token.AccessToken);
        }, 200)
    }

    getCodeVerifier() {

        sessionStorage.setItem("code_verifier", this.props.asanaOauth.code_verifier)
        return this.props.asanaOauth.url;
    }

    render() {
        return (
            <div className="mainDiv" >
                <div className="">
                    <img src={logo} alt="..." className="icon_intro_hqa"></img>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 text-center BordName">
                                bienvenido
                            </div>
                            <div className="col-sm-12 col-md-12 mt100">
                                <ul className="brk-page-intro__sorting d-flex flex-wrap justify-content-center font__family-montserrat">
                                    <li className="bordertr brk-page-intro__sorting-item  rendered" id="introx" data-filter="*" style={{ "opacity": "1" }}>
                                        <div className="brk-page-intro__sorting-title">Planea</div>
                                        <div className="brk-page-intro__sorting-before"></div>
                                        <div className="brk-page-intro__sorting-count font__weight-semibold"> </div>
                                    </li>
                                    <li className="brk-page-intro__sorting-item rendered " data-filter=".filter-portfolio" style={{ "opacity": "1" }}>
                                        <div className="brk-page-intro__sorting-title">Diseña</div>
                                        <div className="brk-page-intro__sorting-before"></div>
                                        <div className="brk-page-intro__sorting-count font__weight-semibold"></div>
                                    </li>
                                    <li className="brk-page-intro__sorting-item rendered" data-filter=".filter-shop" style={{ "opacity": "1" }}>
                                        <div className="brk-page-intro__sorting-title">Compila</div>
                                        <div className="brk-page-intro__sorting-before"></div>
                                        <div className="brk-page-intro__sorting-count font__weight-semibold"></div>
                                    </li>
                                    <li className="brk-page-intro__sorting-item rendered" data-filter=".filter-business" style={{ "opacity": "1" }}>
                                        <div className="brk-page-intro__sorting-title">Valida</div>
                                        <div className="brk-page-intro__sorting-before"></div>
                                        <div className="brk-page-intro__sorting-count font__weight-semibold"></div>
                                    </li>
                                    <li className="brk-page-intro__sorting-item rendered" data-filter=".filter-gallery" style={{ "opacity": "1" }}>
                                        <div className="brk-page-intro__sorting-title">Monitoriza</div>
                                        <div className="brk-page-intro__sorting-before"></div>
                                        <div className="brk-page-intro__sorting-count font__weight-semibold"></div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='row row_padding_intro'>
                        <div className='col-2 offset-md-5'>
                            <a href={this.props.asanaOauth ? this.getCodeVerifier() : ""}>
                                <div className="btn btn__secondary btn_sec_intro " onClick={() => { }}>
                                    <h2>Comencemos</h2> </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        {pjson.version}
                    </div>
                </div>
            </div>

        )

    }
}



const mapStateToProps = state => {
    return {
        page: state.streams.page,
        uss: state.streams.uss,
        token: state.streams.token,
        menu: state.streams.menu,
        asanaSectionId: state.streams.asanaSectionId,
        protocol: state.streams.protocol,
        asanaOauth: state.streams.asanaOauth,

    };
};

export default connect(mapStateToProps, { pageDash, GetHackToken, RefreshToken, DeleteToken, setMenu, GetTasksRichBD, setUS, GetProtocol, CodeVerifier, Oauth, Code })(Intro);