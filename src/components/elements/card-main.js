import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import i_alert from '../../images/ico_alert.png';
import i_prod from '../../images/ico_prod.png';
import i_busi from '../../images/ico_business.png';
import { mainCard } from '../../actions';


class CardMain extends React.Component {

    state = {
    };

    componentDidMount() {

    }

    render() {

        if (this.props.card_ !== undefined && !this.props.car) {
            let image = this.props.card_.typeUS === "alert" ? i_alert : this.props.card_.typeUS === "business" ? i_busi : i_prod;
            let userStory = this.props.card_.userStory.length > 120 ? this.props.card_.userStory.substring(0, 240) + " ..." : this.props.card_.userStory;
            let textUS = this.props.card_.notes.length > 180 ? this.props.card_.notes.substring(0, 180) + " ..." : this.props.card_.notes;
            let result = "";
            if (this.props.card_.result.message !== undefined) {
                result = this.props.card_.result.detail.length > 120 ? this.props.card_.result.detail.substring(0, 150) + " ..." : this.props.card_.result.detail;
            }
            let resultClass = result.length > 0 ? 'col-4 col_result offset-md-1' : 'car_menu_On';

            return (
                <div className='row row_card_main'>
                    <div className='col-6 col_main_in'>
                        <h2 className="main__heading main_heading_card"><span style={{ "background": "linear-gradient(to bottom, hsl(247, 88%, 70%), hsl(282, 82%, 51%)); box-shadow: 0 2px 12px hsla(247, 88%, 70%, .3)" }}>
                            <img src={image} alt="barbarian" className='main__heading_image' />
                        </span> {this.props.card_.name}-{
                                //this.props.card_.typeTest
                            }</h2>
                        <p className="main__desc col_state">{userStory}</p>
                        <div className='row'>
                            <div className='col-10 col_state'>
                                <p className="main__sub"><span>User Story (Detail):</span> <span>{textUS}</span></p>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col col_state'>
                                <p className="main__sub"><span>State:</span> <span>{this.props.card_.state}</span></p>
                            </div>
                            <div className='col'>
                                <p className="main__sub"><span>Alerts OWASP: </span>
                                    <span><a href={this.props.card_.urlAlert}>{this.props.card_.alerts}</a></span>
                                </p>
                            </div>
                            <div className='col'>
                                <p className="main__sub"><span>Tests:</span>
                                    <span>
                                        <a href={this.props.card_.urlScript}>

                                            {
                                                "  test xss, test injection SQLs"
                                                //this.props.card_.scripts
                                            }
                                        </a></span>

                                </p>
                            </div>
                        </div>

                        <div className='row col_tablero'>
                            <div className='col'>
                                <p className="main__sub"><span>Tablero:</span> <span>{this.props.current ? this.props.current.project.name : ""}</span></p>
                            </div>
                            <div className='col'>
                                <p className="main__sub"><span>Urgent(%):</span> <span>{this.props.card_.priority}</span></p>
                            </div>
                            <div className='col'>
                                <p className="main__sub"><span>Type:</span> <span>{this.props.card_.typeUS}</span></p>
                            </div>

                        </div>
                        <div className='row col_tablero'>
                            <div className='col'>
                                <p className="main__sub"><span>Id User History:</span> <span>
                                    <a href={this.props.card_.permalink_url}>{this.props.card_.id}</a></span></p>
                            </div>
                            <div className='col'>
                                <p className="main__sub"><span>Date:</span> <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Number(this.props.card_.date) * 1000)}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={resultClass}>
                        <div className='row' >
                            <div className='col'>
                                <p className="main__sub"><span>Result:</span> <span>{this.props.card_.result.message}</span></p>
                            </div>
                            <div className='col col_state'>
                                <p className="main__sub"><span>Alert:</span>
                                    
                                        <span> <a href={this.props.card_.result.urlAlert}>({this.props.card_.result.alert}) Log</a></span>
                                
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p className="main__sub"><span>Description:</span> <span>{result}{result.length > 150 ? <a href='/'> ver mas</a> : null}</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p className="main__sub"><span>Generar Script:</span>
                                   
                                        <span>  <a href={this.props.card_.result.urlScript}>({this.props.card_.result.script}) alarma proactiva </a></span>
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
        return (<div></div>)
    }
}

const mapStateToProps = state => {

    return { card_: state.streams.card };
};

export default connect(mapStateToProps, { mainCard })(CardMain);
