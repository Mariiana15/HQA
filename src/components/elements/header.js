import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';

class Header extends React.Component {

    state = {
    };

    componentDidMount() {

    }

    render() {

        return (
                <header className="header">
                    <h1 className="header__heading icono-logo">
                        <a href="/" target="_blank" rel="noreferrer noopener">
                            <img src={logo} alt="..." className=""></img>
                        </a>
                    </h1>
                {/*    <div className="search">
                        <input type="text" className="search__input" placeholder="Search..." />
                        <div className="search__icon">
                            <ion-icon name="search"></ion-icon>
                        </div>
        </div>*/}
                    <div className="row justify-content-around header_row">
                        <div className="col-2 offset-md-3">
                            <a href="/" className="header__link">{this.props.headers["hu"]}</a>
                        </div>
                        <div className="col-1 offset-md-4">
                            <a href="/" className="header__link header_name">{this.props.headers["name"]}</a>
                        </div>
                        <div className="col offset-md-1">
                            <a href="/" className="header__link">
                                <img src={this.props.headers["logo"]} alt="..." className="header_profile"></img>
                            </a>
                        </div>
                    </div>
                </header>
        )
    }
}


export default connect()(Header);
