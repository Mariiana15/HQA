import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';

class IconCircle extends React.Component {

    state = {
    };

    componentDidMount() {

    }


    render() {
        return (
            <div className={this.props.container} >
                <div className='circle '>
                    <div className='circle_title'>
                        <h2>{this.props.h2}</h2>
                        <h3>{this.props.h3}</h3>
                    </div>
                    <div className='circle_inner'>
                        <div className='circle_inner__layer'>
                            <img src={this.props.img} alt="..." class={this.props.imgClass}></img>
                        </div>
                        <div className='circle_inner__layer'>
                            <img src={this.props.img} alt="..." class={this.props.imgClass}></img>
                        </div>
                        <div className='circle_inner__layer'>
                            <img src={this.props.img} alt="..." class={this.props.imgClass}></img>
                        </div>
                    </div>
                    <div className='content_shadow'></div>
                </div>
            </div>
        )
    }
}


export default connect()(IconCircle);
