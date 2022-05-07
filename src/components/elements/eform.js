import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import Form from '../forms/form-Sync';
import FormTech from '../forms/form-add-details';
import i_warn from '../../images/ico_warn.png';
import images from '../utils/image.json'


class EForm extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {

        let form;
        switch (this.props.form) {
            case 'tech':
                form = <FormTech typeWindow={this.props.typeWindow} />
                break
            case 'sync':
                form = <Form typeWindow={this.props.typeWindow} />
                break
            default:
                form = <Form typeWindow={this.props.typeWindow} />
                break
        }

        let icon;
        switch (this.props.icon) {
            case 'warn':
                icon = <div className="clash-card__image--warn ">
                    <img src={i_warn} alt="barbarian" />
                </div>
                break
            default:
                icon = null
                break
        }

        let styleAlert = this.props.alert ? { "--bg": `linear-gradient(120deg, hsla(26, 80%, 50%, 0.9), 20%, hsl(270, 50%, 11%) 90%), url(${images.unsplash[Math.round(Math.random() * (9) + 1)]})` } : null;

        return (
            <div className="main__cards-container-form" style={styleAlert}>
                <div className="main__cards-container-heading-wrap menu_alert_img">
                    <h2 className="main__cards-container-heading ss-heading">{this.props.title}</h2>
                    {icon}
                </div>
                <div className='menu_aux_overflow'>
                    {form}
                </div>

            </div>

        )
    }
}


export default connect()(EForm);
