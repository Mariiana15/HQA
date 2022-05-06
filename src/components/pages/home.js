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
        return (
            <div className='col'>
                <MainCard />
                <CardFilter />
                <CardDash tablero="Tablero Mi primera prueba" />
                <CardIndex />
            </div>
        )
    }
}


export default connect()(Home);
