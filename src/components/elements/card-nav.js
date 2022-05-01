import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import images from '../utils/image.json'

class NavCard extends React.Component {

    state = { current: 'cardAll' };

    componentDidMount() {
    }

    activateMenu(menu) {
        let element = document.getElementById(this.state.current);
        element.classList.remove("active");
        element = document.getElementById(menu);
        element.classList.add("active");
        this.setState({ current: menu })
    }

    render() {
        return (
            <div className="topnav">
                <a className="active" id='cardAll' href="#all" onClick={()=>{this.activateMenu('cardAll')}}>All</a>
                <a href="#spring" id='cardSpring' onClick={()=>{this.activateMenu('cardSpring')}}>Spring</a>
            </div>


        )
    }
}


export default connect()(NavCard);
