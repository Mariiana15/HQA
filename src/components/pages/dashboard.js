import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Header from '../elements/header';
import Menu from '../elements/lateral-menu';
import Elist from '../elements/elist';
import IconAux from '../elements/icon-menu-aux';
import { pageDash, setMenu } from '../../actions';
import Home from './home';
import { GetHackToken, RefreshToken, DeleteToken } from '../../apis/configBack'
import Loader from './loader'

const timerLoadPage = 5500
class Dashboard extends React.Component {

    state = {};

    componentDidMount() {

        let index = document.getElementById('bodyid');
        index.classList.remove("body_form");
        this.props.pageDash(<Loader message="Beginning ..."></Loader>);
        this.props.setMenu( <Elist title="Your Activity" />);
        this.timeout = setTimeout(() => {
            this.props.pageDash(<Home></Home>);
        }, timerLoadPage)
    }

    variables() {
        return {
            "hu": "10 User Stoy finalized",
            "name": "Vecindario",
            "logo": "https://viewinmobiliario2.s3-sa-east-1.amazonaws.com/static_assets/vecindario-logo.svg",
        }
    }

    componentDidUpdate() {
        let currentTimestamp = Date.now()
        if (this.props.token && currentTimestamp > Number(this.props.token.AtExpires) * 1000) {
            this.props.RefreshToken(this.props.token.AccessToken, this.props.token.RefreshToken)
            // this.props.DeleteToken(this.props.token.AccessToken)
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
                            <div className='col main__col-2 menu_On' id="menu">
                                {
                                    // <Elist title="You Activity"/>
                                    // <EForm title="You Activity" />
                                    //<ELayout title="Urgent" text="You don't stop of to learn"/>
                                }
                                {this.props.menu}
                               
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
    return {
        page: state.streams.page,
        token: state.streams.token,
        menu: state.streams.menu,
    };
};

export default connect(mapStateToProps, { pageDash, GetHackToken, RefreshToken, DeleteToken, setMenu })(Dashboard);