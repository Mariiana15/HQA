import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import ListCard from '../elements/card-list';

class CardDash extends React.Component {

    state = { };

    componentDidMount() {

    }

    componentDidUpdate() {

        /*if (this.props.uss && this.props.uss[this.props.indexProject ? this.props.indexProject : 0].length > this.state.numUS) {
                    this.setState({ numUS: this.props.uss[this.props.indexProject].length });
                }*/

    }

    render() {

        if (this.props.current !== undefined  && this.props.current.storyUser !== undefined && this.props.current.storyUser !== null) {
            return <div className='row con_rw_col' >
                <div className='row'>
                    <div className='col-2 offset-md-1'>
                        <hr className=" border-2 border-top " />
                    </div>
                    <div className='col-4 offset-md-1 list_name'>
                        <div>{this.props.current.storyUser.length > 2 ? this.props.current.project.name + "-" + this.props.current.name : this.props.current.name}</div>
                    </div>
                    <div className='col-2'>
                        <hr className=" border-2 border-top " />
                    </div>
                </div>
                <div className='col-6 '>
                    <ListCard storyUS={this.props.current.storyUser} />
                </div>
                <div className='col-5'>
                    <ListCard typetUs="2" storyUS={this.props.current.storyUser} />
                </div>
            </div >
        }
    }
}


const mapStateToProps = state => {
    return {
        uss: state.streams.uss,
        indexProject: state.streams.indexProject,
    };
};

export default connect(mapStateToProps, {})(CardDash);
