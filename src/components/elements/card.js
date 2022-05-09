import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import i_alert from '../../images/ico_alert.png';
import i_prod from '../../images/ico_prod.png';
import i_busi from '../../images/ico_business.png';
import i_warn from '../../images/ico_warn.png';
import { mainCard, setMenu, openMenu } from '../../actions';
import EForm from './eform';
import Elist from './elist';

class Card extends React.Component {

    state = { index: null };

    componentDidMount() {

    }


    selectCard(id, flagInfo) {

        if (this.props.card_ !== undefined && this.props.card_.idLast !== undefined && this.props.card_.idLast !== id) {
            let cardLast = document.getElementById(this.props.card_.idLast);
            cardLast.classList.remove("card_unit_select");
        }
        let card = document.getElementById(id);
        if (card) {
            card.classList.add("card_unit_select");
            this.props.card['idLast'] = id;
            this.props.mainCard(this.props.card);
            if (flagInfo === true)
                this.addFormDescription()
            else
                this.formMetrics()
        }
        else {
            this.setState({ index: true })
        }
    }


    addFormDescription() {

        this.props.openMenu(true);
        this.props.setMenu(<EForm title="You should be complete" form="tech" typeWindow="subMenu" alert="true" icon="warn" />)
    }

    formMetrics() {

        this.props.openMenu(false);
        this.props.setMenu(<Elist title="Your Activity" />)
    }

    render() {

        let image = this.props.card.typeUS === "alert" ? i_alert : this.props.card.typeUS === "business" ? i_busi : i_prod;
        let priority = this.props.card.priority > 0 && this.props.card.priority < 34 ? "progress-level-basic" : this.props.card.priority > 33 && this.props.card.priority < 67 ? "progress-level-medium" : "progress-level";
        let end = this.props.card.state === "close" ? "card_unit_ok" : "";
        let userStory = this.props.card.userStory.length > 65 ? this.props.card.userStory.substring(0, 65) + " ..." : this.props.card.userStory;
        let name = this.props.card.name.length > 15 ? this.props.card.name.substring(0, 15) : this.props.card.name;
        let warn = this.props.card.addInfo === true ? <div className="clash-card__image--warn">
            <img src={i_warn} alt="barbarian" />
        </div> : null;
        return (
            <div className='card_unit' key={this.props.card.name} >
                <div className={`clash-card barbarian ${end}`} id={this.props.card.gid} onClick={() => { this.selectCard(this.props.card.gid, this.props.card.addInfo) }}>
                    <div className="clash-card__image--barbarian">
                        <img src={image} alt="barbarian" />
                    </div>
                    {warn}
                    <div className='container row_card'>
                        <div className='row'>
                            <div className='col-1'>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="clash-card__level clash-card__level--barbarian">{this.props.card.typeUS}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="progress-bar">
                                            <div className={priority} style={{ "width": `${this.props.card.priority}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-9 offset-md-2'>
                                <div className="clash-card__unit-name"> {name}-{this.props.card.typeTest}</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className="clash-card__unit-description">
                                    {userStory}
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
                            <div className='col-3'>
                                <div className='row'>
                                    <div className='col'>
                                        Scripts: {this.props.card.scripts}
                                    </div>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className='row'>
                                    <div className='col'>
                                        Date: {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Number(this.props.card.date) * 1000)}
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

const mapStateToProps = state => {
    return { card_: state.streams.card };
};

export default connect(mapStateToProps, { mainCard, setMenu, openMenu })(Card);