import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import i_alert from '../../images/ico_alert.png';
import i_prod from '../../images/ico_prod.png';
import i_busi from '../../images/ico_business.png';
import i_warn from '../../images/ico_warn.png';
import { mainCard, setMenu, openMenu, setUS } from '../../actions';
import EForm from './eform';
import Elist from './elist';
import trash from '../../images/trash.png';
import check from '../../images/ico_check.png';
import { SetStateUserStory } from '../../apis/configBack';
import { GetTasksRichBD } from '../../apis/webSocket';

class Card extends React.Component {

    state = { index: null };

    componentDidMount() {

    }


    selectCard(id, flagInfo, cardObj) {

        if (this.props.card_ !== undefined && this.props.card_.idLast !== undefined && this.props.card_.idLast !== id) {
            let cardLast = document.getElementById(this.props.card_.idLast);
            cardLast.classList.remove("card_unit_select");
        }
        let card = document.getElementById(id);
        if (card) {
            card.classList.add("card_unit_select");
            this.props.card['idLast'] = id;
            this.props.mainCard(this.props.card);
            if (flagInfo === 1 && cardObj.state === "open")
                this.addFormDescription(cardObj)
            else
                this.formMetrics()
        }
        else {
            this.setState({ index: true })
        }
    }


    addFormDescription(card) {

        this.props.openMenu(true);
        this.props.setMenu(<EForm title="You should be complete" form="tech" typeWindow="subMenu" alert="true" icon="warn" card={card} />)
    }

    formMetrics() {

        this.props.openMenu(false);
        this.props.setMenu(<Elist title="Your Activity" />)
    }

    updateCard(){

        this.props.setUS(null);
        let ws = GetTasksRichBD(this.props.token.AccessToken, this.props.asanaSectionId, this.props.protocol.protocol, this)
        this.timeout = setTimeout(() => {
            ws.close()
        }, this.props.protocol.timer, ws)

    }

    render() {

        let image = this.props.card.typeUS === "alert" ? i_alert : this.props.card.typeUS === "business" ? i_busi : i_prod;
        let priority = this.props.card.priority > 0 && this.props.card.priority < 34 ? "progress-level-basic" : this.props.card.priority > 33 && this.props.card.priority < 67 ? "progress-level-medium" : "progress-level";
        let end = this.props.card.state === "close" ? "card_unit_ok" : "";
        let userStory = this.props.card.userStory.length > 65 ? this.props.card.userStory.substring(0, 65) + " ..." : this.props.card.userStory;
        let name = this.props.card.name.length > 15 ? this.props.card.name.substring(0, 15) : this.props.card.name;
        let warn = this.props.card.addInfo === 1 ? <div className="clash-card__image--warn">
            <img src={i_warn} alt="barbarian" />
        </div> : null;
        let chk = this.props.card.state === 'open' ? <div className='btn btn__secondary btn_ico_card_complete' onClick={() => { SetStateUserStory(this.props.token.AccessToken, "close", this.props.card.hid); this.updateCard(); }}>
            <img className='ico_card_complete' src={check} alt="success cut out png @transparentpng.com" />
        </div> : null
        return (
            <div className='card_unit' key={this.props.card.name} >
                <div className={`clash-card barbarian ${end}`} id={this.props.card.gid} >
                    <div className="clash-card__image--barbarian">
                        <img src={image} alt="barbarian" />
                    </div>
                    {warn}
                    <div className='cont_btns'>
                        {chk}
                        <div className={`btn btn__secondary ${chk ? "btn_ico_card_complete_" : "btn_ico_card_complete_X"}`} onClick={() => { SetStateUserStory(this.props.token.AccessToken, "delete", this.props.card.hid); this.updateCard(); }}>
                            <img className='ico_card_complete_trash' src={trash} alt="success cut out png" />
                        </div>

                    </div>
                    <div className='container row_card' onClick={() => { this.selectCard(this.props.card.gid, this.props.card.addInfo, this.props.card) }}>
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
    return {
        card_: state.streams.card,
        token: state.streams.token,
        protocol: state.streams.protocol,
    };
};

export default connect(mapStateToProps, { mainCard, setMenu, openMenu, setUS })(Card);