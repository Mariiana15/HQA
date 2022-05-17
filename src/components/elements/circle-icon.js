import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import { useNavigate } from 'react-router-dom'

class IconCircle extends React.Component {

    state = {
    };

    componentDidUpdate() {
        if (this.props.start)
            this.props.navigation('/dashboard')
    }


    render() {

        return (
            <div className={this.props.container} >
                <div className='circle' onClick={() => {
                    this.props.navigation('/dashboard')
                }}>
                    <div className='circle_title'>
                        <h2>{this.props.h2}</h2>
                        <h3>{this.props.h3}</h3>
                    </div>
                    <div className='circle_inner'>
                        <div className='circle_inner__layer'>
                            <img src={this.props.img} alt="..." className={this.props.imgClass}></img>
                        </div>
                        <div className='circle_inner__layer'>
                            <img src={this.props.img} alt="..." className={this.props.imgClass}></img>
                        </div>
                        <div className='circle_inner__layer'>
                            <img src={this.props.img} alt="..." className={this.props.imgClass}></img>
                        </div>
                    </div>
                    <div className='content_shadow'></div>
                </div>
            </div>
        )
    }
}

export default function (props) {
    const navigation = useNavigate();

    return <IconCircle {...props} navigation={navigation} />;
}

