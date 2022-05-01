import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import images from '../utils/image.json'
import styles from '../utils/styles.json'

class ElementList extends React.Component {

    state = {};

    componentDidMount() {
    }
    
    render() {
        return (
            <li class="main__card" id={`elist${this.props.id}`} style={{ "--hue": styles.hue[Math.round(Math.random() * (9) + 1)] }} >
                <div class="main__card-image-container">
                    <img src={images.unsplash[Math.round(Math.random() * (9) + 1)]} alt="" class="main__card-image" />
                </div>
                <h3 class="main__card-heading">{this.props.head}</h3>
                <p class="main__card-heading-sub">{this.props.shead}</p>
                <p class="main__card-heading-type">{this.props.etype}</p>
            </li>

        )
    }
}


export default connect()(ElementList);
