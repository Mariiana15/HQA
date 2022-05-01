import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import Formulario from '../forms/form-Sync';

class EForm extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {
        return (
            <div class="main__cards-container">
                <div class="main__cards-container-heading-wrap">
                    <h2 class="main__cards-container-heading ss-heading">{this.props.title}</h2>
                </div>

                <div className='menu_aux_overflow'>
                    <Formulario />
                </div>

            </div>

        )
    }
}


export default connect()(EForm);
