import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import images from '../utils/image.json'

class ELayout extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {
        
        return (

            <div className={`${this.props.classT}`} style={{"--bg":  `linear-gradient(120deg, hsla(26, 80%, 50%, 0.5), 10%, hsl(270, 50%, 11%) 60%), url(${images.unsplash[Math.round(Math.random() * (9) + 1)]})`}}>
                <div className="main__crossing-current">
                    <p className="main__crossing-upper">
                       {this.props.title}
                    </p>
                    <h3 className="main__crossing-heading">
                       {this.props.text}
                    </h3>
                </div>
            </div>
        )
    }
}


export default connect()(ELayout);
