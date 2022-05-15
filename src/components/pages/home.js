import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import MainCard from '../elements/card-main';
import CardFilter from '../elements/card-filter';
import CardIndex from '../elements/card-index';
import CardDash from '../elements/card-dash';
import ActionPage from '../elements/action_page';
import images from '../utils/image.json';
import {setIndexProject} from '../../actions';


class Home extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {

        console.log(this.props.flagMenu)
        this.timeout3 = setTimeout(() => {
            let element = document.getElementById('col_dh');
            if (this.props.flagMenu  || this.props.flagMenu === false|| this.props.flagMenu === "open") {
                element.setAttribute("disabled", "true")
                element.classList.add("dimmer")
            }
            else if (this.props.flagMenu === null) {
                element.removeAttribute("disabled")
                element.classList.remove("dimmer")
            }
        }, 250);


        let empty = 2;
        if (this.props.uss && this.props.uss.length === 1 && this.props.uss[0].storyUser === null) {
            empty = 2;
        }
        else if (this.props.uss && this.props.uss.length >= 1  && this.props.uss[0].storyUser !== null)
           { empty = 1;

           }



        if (empty === 1)
            return (
                <div className="col" id='col_dh'>
                    <MainCard current={this.props.uss[this.props.indexProject ? this.props.indexProject : 0]} />
                    <CardFilter />
                    <div className='card_dash_list'>
                        <CardDash tablero="Tablero Mi primera prueba" current={this.props.uss[this.props.indexProject ? this.props.indexProject : 0]} />
                    </div>
                    <CardIndex />
                </div>
            )
        else if (empty === 2)
            return (
                <ActionPage img={images.fail_Page} title="Lo sentimos" msg="No hemos podido recuperar ninguna hisoria de usuario" btn="Volver a sincronizar" path="/"></ActionPage>
            )
        else {
            return (
                <div></div>
            )

        }
    }
}


const mapStateToProps = state => {
    return {
        uss: state.streams.uss,
        indexProject: state.streams.indexProject,
        flagMenu: state.streams.flagMenu


    };
};

export default connect(mapStateToProps, {setIndexProject})(Home);