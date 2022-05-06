import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Header from '../elements/header';
import Menu from '../elements/lateral-menu';
import Elist from '../elements/elist';
import IconAux from '../elements/icon-menu-aux';
import { pageDash } from '../../actions';
import Home from './home';




class Dashboard extends React.Component {

    state = {};

    componentDidMount() {
        this.props.pageDash(<Home></Home>);
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
                            {this.props.page}
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



const mapStateToProps = state => {
    return { page: state.streams.page };
};

export default connect(mapStateToProps, { pageDash })(Dashboard);