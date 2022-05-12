import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import {
    Link,
} from "react-router-dom";

class ActionPage extends React.Component {

    state = {
    };

    componentDidMount() {

    }


    render() {

        return (
            <div>
                <div className='container fail_page'>
                    <div className='row'>
                        <div className='col'>
                            <img src={this.props.img}  alt='user story no found'></img>
                        </div>
                        <div className='col fail_page_text'>
                            <div className='row'>
                                <div className='col'>
                                    <h1>{this.props.title}</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <h3>{this.props.msg}</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Link to={this.props.path}>
                                        <div className="btn btn__primary"  ><p>{this.props.btn}</p></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default connect()(ActionPage);
