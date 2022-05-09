import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import MainCard from '../elements/card-main';
import CardFilter from '../elements/card-filter';
import CardIndex from '../elements/card-index';
import CardDash from '../elements/card-dash';


class Home extends React.Component {

    state = {};

    componentDidMount() {
    }

    render() {

        let listProject = null
        if (this.props.uss) {
            listProject = <div className='card_dash_list'>
                <CardDash tablero="Tablero Mi primera prueba" current={this.props.uss[this.props.indexProject ? this.props.indexProject : 0]}  />
            </div>
        }
        return (
            <div className='col'>
                <MainCard />
                <CardFilter />
                {listProject}
                <CardIndex />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        uss: state.streams.uss,
        indexProject: state.streams.indexProject

    };
};

export default connect(mapStateToProps, {})(Home);