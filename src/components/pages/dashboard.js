import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import Header from '../elements/header';
import Menu from '../elements/lateral-menu';


class Dashboard extends React.Component {

    state = { };

    componentDidMount() {
    }

    variables() {
        return {
            "hu": "10 HU terminadas",
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
                </div >
            </div >
        )
    }
}


export default connect()(Dashboard);
