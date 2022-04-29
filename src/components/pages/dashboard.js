import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Header from '../elements/header';
import Menu from '../elements/lateral-menu';
import Elist from '../elements/elist';
import EForm from '../elements/eform';
import ELayout from '../elements/elayout';

import i_alert from '../../images/ico_alert.png';
import MainCard from '../elements/card-main';

import FilterCard from '../elements/card-filter';

import IconAux from '../elements/icon-menu-aux';
import CardFilter from '../elements/card-filter';
import CardIndex from '../elements/card-index';
import CardDash from '../elements/card-dash';




class Dashboard extends React.Component {

    state = {};

    componentDidMount() {
    }

    variables() {
        return {
            "hu": "10 User Stoy finalized",
            "name": "Vecindario",
            "logo": "https://viewinmobiliario2.s3-sa-east-1.amazonaws.com/static_assets/vecindario-logo.svg",
        }
    }

    render() {
        let variables = this.variables();
        return (
            <div className='dash'>
                <Header headers={variables} />
                <div className="body">
                    <Menu />
                    <div className='container cont_row_col main '>
                        <div className='row'>
                            <div className='col'>
                                <div className='row row_card_main'>
                                    <div className='col-6'>
                                        <MainCard />
                                    </div>
                                </div>
                                <CardFilter />
                                <CardDash tablero="Tablero Mi primera prueba" />
                                <CardIndex />
                            </div>
                            <div></div>
                             <div className='col main__col-2 menu_On' id="menu">
                                {
                                    // <Elist title="You Activity"/>
                                    // <EForm title="You Activity" />
                                    //<ELayout title="Urgent" text="You don't stop of to learn"/>
                                }
                                <Elist title="You Activity" />

                            </div>
                        </div>
                        <IconAux />
                    </div>
                </div >
            </div >
        )

    }
}


export default connect()(Dashboard);
