import React from 'react';
import { connect } from 'react-redux';
import '../styles/loader.scss';



class Construction extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {
        return (
            <div className='col'>
                <div className='dash_construction'>
                    <div className='container'>
                        <h1>{this.props.message}</h1>
                        <div className='container__bg'>
                            <svg className='circle_' >
                                <circle cx="200" cy="200" r="200" 
                                />
                                <circle cx="200" cy="200" r="200" 
                                />
                            </svg>
                            <div className='hexagons'>
                                <div className='hexagons__row'>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--1'>
                                        </div>
                                    </div>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--2'>
                                        </div>
                                    </div>
                                </div>
                                <div className='hexagons__row'>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--6'>
                                        </div>
                                    </div>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--7'>
                                        </div>
                                    </div>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--3'>
                                        </div>
                                    </div>
                                </div>
                                <div className='hexagons__row'>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--5'>
                                        </div>
                                    </div>
                                    <div className='hexagons__cell'>
                                        <div className='hexagons__cell--4'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        )
    }
}


export default connect()(Construction);
