import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import images from '../utils/image.json'
import i_alert from '../../images/ico_alert.png';
import i_prod from '../../images/ico_prod.png';
import i_busi from '../../images/ico_business.png';

class Card extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {
        let image = this.props.indexIm === "1" ? i_alert : this.props.indexIm === "2" ? i_busi : i_prod;
        let progress = this.props.progress > 0  && this.props.progress < 34 ? "progress-level-basic" : this.props.progress > 33  && this.props.progress < 67 ? "progress-level-medium" : "progress-level";
        let end =this.props.cardOK ? "card_unit_ok": "";
        return (
            <div className='card_unit'>
                <div class={`clash-card barbarian ${end}`}>
                    <div class="clash-card__image--barbarian">
                        <img src={image} alt="barbarian" />
                    </div>
                    <div className='container row_card'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='row'>
                                    <div className='col'>
                                        <div class="clash-card__level clash-card__level--barbarian">{this.props.typeUS}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div class="progress-bar">
                                            <div class={progress} style={{ "width": `${this.props.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-9'>
                                <div class="clash-card__unit-name"> {this.props.typeTest}</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div class="clash-card__unit-description">
                                    {this.props.US}
                                </div>
                            </div>
                        </div>
                        <div className='row metric_card'>
                            <div className='col-2'>
                                <div className='row'>
                                    <div className='col'>
                                        Alerts:  {this.props.alerts}
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row'>
                                    <div className='col'>
                                        Scripts: {this.props.scripts}
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row'>
                                    <div className='col'>
                                        Date: {this.props.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        )
    }
}


export default connect()(Card);
