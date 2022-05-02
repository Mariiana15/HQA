import React from 'react';
import { connect } from 'react-redux';
import '../styles/sync.scss';
import '../styles/myStyle.scss';
import logo from '../../images/logo3.png';

import i_alert from '../../images/ico_alert.png';
import i_prod from '../../images/ico_prod.png';
import i_busi from '../../images/ico_business.png';
import { mainCard } from '../../actions';

let textUS = "*Los tipos de cuotas son en el aplicativo los siguientes (así se llamarán en esta HU): —-Cuota regular: es el valor de la cuota que se debe pagar cada mes y hace parte de la cuota inicial —-Primas —-Cesantías —-Cuota personalizada Una vez el cliente esté ingresando los datos para realizar la simulación de un inmueble, verá la información de la cuota de separación, la cual no tendrá ninguna modificación vs el diseño actual. También verá debajo de la cuota de separación, el título de cuota inicial (aquí inician los cambios), y debajo un texto azul resaltado: Se pagarán XX cuotas mensuales de $XXXX hasta completar el valor de tu inmueble, donde XX es el número de cuotas regulares que el cliente pagaría si no ingresa aportes extras y $XXXX es el valor de la cuota regular mensual Debajo de ese texto estará una pregunta: ¿Quieres personalizar el valor de tu cuota mensual??, y debajo dos opciones:";

class CardMain extends React.Component {

    state = {
    };

    componentDidMount() {

    }


    render() {
        if (this.props.card_ != undefined) {
            let image = this.props.card_.indexIm === "1" ? i_alert : this.props.card_.indexIm === "2" ? i_busi : i_prod;
            let text = this.props.card_.US.length > 120 ? this.props.card_.US.substring(0, 240) + " ..." : this.props.card_.US;
           // textUS = this.props.card_.us2O.length > 120 ? this.props.card_.us2O.substring(0, 240) + " ..." : this.props.card_.us2O;
            textUS = textUS.length > 120 ? textUS.substring(0, 240) + " ..." : textUS;
           
            let result = "";
            if(this.props.card_.result != undefined){
                result =  this.props.card_.resultDes.length > 120 ? this.props.card_.resultDes.substring(0, 150) + " ...": this.props.card_.resultDes;

            }
           
            return (
                <div className='row row_card_main'>
                    <div className='col-6 col_main_in'>
                        <h2 class="main__heading"><span style={{ "background": "linear-gradient(to bottom, hsl(247, 88%, 70%), hsl(282, 82%, 51%)); box-shadow: 0 2px 12px hsla(247, 88%, 70%, .3)" }}>
                            <img src={image} alt="barbarian" className='main__heading_image' />
                        </span> <a href='#' className='main_heading_card'>{this.props.card_.typeTest}</a></h2>
                        <p class="main__desc col_state">{text}</p>
                        <div className='row'>
                            <div className='col-10 col_state'>
                                <p class="main__sub"><span>User Story (Detail):</span> <span>{textUS}</span></p>
                            </div>
    
                        </div>
                        <div className='row'>
                            <div className='col col_state'>
                                <p class="main__sub"><span>State:</span> <span>{this.props.card_.state}</span></p>
                            </div>
                            <div className='col'>
                                <p class="main__sub"><span>Alerts OWASP:</span> <span>{this.props.card_.alerts}</span></p>
                            </div>
                            <div className='col'>
                                <p class="main__sub"><span>Scripts:</span> <span>{this.props.card_.scripts}</span></p>
                            </div>
                        </div>

                        <div className='row col_tablero'>
                            <div className='col'>
                                <p class="main__sub"><span>Tablero:</span> <span>{this.props.card_.tablero}</span></p>
                            </div>
                            <div className='col'>
                                <p class="main__sub"><span>Urgent(%):</span> <span>{this.props.card_.progress}</span></p>
                            </div>
                            <div className='col'>
                                <p class="main__sub"><span>Type:</span> <span>{this.props.card_.typeUS}</span></p>
                            </div>

                        </div>
                        <div className='row col_tablero'>
                            <div className='col'>
                                <p class="main__sub"><span>Id User History:</span> <span> <a href='#'>{this.props.card_.idUS}</a></span></p>
                            </div>
                            <div className='col'>
                                <p class="main__sub"><span>Date:</span> <span>{this.props.card_.date}</span></p>
                            </div>
                        </div>

                    </div>
                    <div className='col-4 col_result offset-md-1' style={{ visibility: result.length > 0 ? "visible" : "hidden" }}>
                        <div className='row' >
                            <div className='col'>
                                <p class="main__sub"><span>Result:</span> <span>{this.props.card_.result}</span></p>
                            </div>
                            <div className='col col_state'>
                                <p class="main__sub"><span>Alert:</span> <span>{this.props.card_.alertResult}</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p class="main__sub"><span>Description:</span> <span>{result}{result.length > 150 ? <a href='#'> ver mas</a> : null}</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p class="main__sub"><span>Generar Script:</span> <span> <a href='#'>{this.props.card_.resultScript}</a></span></p>
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
