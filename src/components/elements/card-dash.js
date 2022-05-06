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
                    <div className='col-2 offset-md-1'>
                        <hr className=" border-2 border-top " />
                    </div>
                    <div className='col-4 offset-md-1 list_name'>
                        <div>{this.props.uss  && this.props.uss  !== "[]"? this.props.uss[0].projects[0].name : undefined}</div>
                    </div>
                    <div className='col-2'>
                        <hr className=" border-2 border-top " />
                    </div>

                </div>
                <div className='col-6 '>
                    <ListCard />
                </div>
                <div className='col-5'>
                    <ListCard test="2" />
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        uss: state.streams.uss
    };
};

export default connect(mapStateToProps, {})(CardDash);
