import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import ListCard from '../elements/card-list';

class CardDash extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {
        return (
            <div className='row con_rw_col'>
                <div className='row'>
                    <div className='col-3 offset-md-2'>
                        <hr class=" border-2 border-top " />
                    </div>
                    <div className='col-2 list_name'>
                        <div>{this.props.tablero}</div>
                    </div>
                    <div className='col-3'>
                        <hr class=" border-2 border-top " />
                    </div>

                </div>
                <div className='col-6 '>
                    <ListCard  />
                </div>
                <div className='col-5'>
                    <ListCard  test="2" />
                </div>
            </div>

        )
    }
}


export default connect()(CardDash);
