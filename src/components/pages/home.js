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

class Home extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {

        let empty = 3
        if (this.props.uss && this.props.uss.length === 1 && this.props.uss[0].storyUser === null) {
            empty = 2
        }
        else if (this.props.uss)
            empty = 1



        if (empty === 1)
            return (
                <div className='col'>
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
        indexProject: state.streams.indexProject

    };
};

export default connect(mapStateToProps, {})(Home);