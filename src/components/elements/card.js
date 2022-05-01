import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import images from '../utils/image.json'
import i_alert from '../../images/ico_alert.png';
import i_prod from '../../images/ico_prod.png';
import i_busi from '../../images/ico_business.png';
import { mainCard } from '../../actions';

class Card extends React.Component {

    state = {};

    componentDidMount() {
    }


    selectCard(id) {
        if (this.props.card_ != undefined && this.props.card_.idLast != undefined && this.props.card_.idLast !== id) {

            let cardLast = document.getElementById(this.props.card_.idLast);
            cardLast.classList.remove("card_unit_select");
        }
        let card = document.getElementById(id);
        card.classList.add("card_unit_select");
        this.props.card['idLast'] = id;
        this.props.mainCard(this.props.card);

    }

    render() {
        let image = this.props.card.indexIm === "1" ? i_alert : this.props.card.indexIm === "2" ? i_busi : i_prod;
        let progress = this.props.card.progress > 0 && this.props.card.progress < 34 ? "progress-level-basic" : this.props.card.progress > 33 && this.props.card.progress < 67 ? "progress-level-medium" : "progress-level";
        let end = this.props.card.cardOK ? "card_unit_ok" : "";
        let us = this.props.card.US.length > 65 ? this.props.card.US.substring(0, 65) + " ..." : this.props.card.US;

        if (this.props.card) {
            return (
                <div className='card_unit' onClick={() => { this.selectCard(this.props.card.id) }}>
                    <div class={`clash-card barbarian ${end}`} id={this.props.card.id}>
                        <div class="clash-card__image--barbarian">
                            <img src={image} alt="barbarian" />
                        </div>
                        <div className='container row_card'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='row'>
                                        <div className='col'>
                                            <div class="clash-card__level clash-card__level--barbarian">{this.props.card.typeUS}</div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div class="progress-bar">
                                                <div class={progress} style={{ "width": `${this.props.card.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div class="clash-card__unit-name"> {this.props.card.typeTest}</div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="clash-card__unit-description">
                                        {us}
                                    </div>
                                </div>
                            </div>
                            <div className='row metric_card'>
                                <div className='col-2'>
                                    <div className='row'>
                                        <div className='col'>
                                            Alerts:  {this.props.card.alerts}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='row'>
                                        <div className='col'>
                                            Scripts: {this.props.card.scripts}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='row'>
                                        <div className='col'>
                                            Date: {this.props.card.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else
            return <div></div>
    }
}


const mapStateToProps = state => {
    return { card_: state.streams.card };
};

export default connect(mapStateToProps, { mainCard })(Card);