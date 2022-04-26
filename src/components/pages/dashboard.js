import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import Header from '../elements/header';
import Menu from '../elements/lateral-menu';
import Elist from '../elements/elist';
import EForm from '../elements/eform';
import ELayout from '../elements/elayout';
import IconAux from '../elements/icon-menu-aux';



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





    /*
    imagen renderizada
       <div class="main__crossing-container">
                                        <div class="main__crossing-current">
                                            <p class="main__crossing-upper">
                                                Now crossing
                                            </p>
                                            <h3 class="main__crossing-heading">
                                                Center Point
                                            </h3>
                                        </div>
                                    </div>
    */
    render() {
        let variables = this.variables();
        return (
            <div className='dash'>
                <Header headers={variables} />
                <div className="body">

                    <Menu />
                    <main class="main">
                        <div class="main__col-2 menu_On" id="menu">
                            {
                                // <Elist title="You Activity"/>
                                // <EForm title="You Activity" />
                                //<ELayout title="Urgent" text="You don't stop of to learn"/>
                            }
                        </div>
                        <IconAux />


                    </main>

                </div >

            </div >
        )

    }
}


export default connect()(Dashboard);
