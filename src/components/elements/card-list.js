import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Card from './card';
import { mainCard } from '../../actions';

const US = [{ "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 15 },
{ "tablero": "Mi tablero", "state": "close", "idUS": "US-123123", "indexIm": "2", "typeUS": "Process", "typeTest": "Test login SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "3", "date": Date.now(), "progress": 25 },
{ "indexIm": "3", "typeUS": "Business", "typeTest": "Test Injection SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "2", "scripts": "1", "date": Date.now(), "progress": 35 },
{ "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 55 },
{ "indexIm": "3", "typeUS": "Business", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "2", "scripts": "2", "date": Date.now(), "progress": 68 },
{ "indexIm": "2", "typeUS": "Process", "typeTest": "Test Injection SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 92 },
]

const US2 = [{ "state": "close", "result": "successful", "alertResult": "0", "resultDes": "las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr las pruebas no presentan ningun erorr", "resultScript": "script_1", "cardOK": "ok", "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma Como usuario quiero validar si me encuentro registrado en la plataforma Como usuario quiero validar si me encuentro registrado en la plataforma Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 15 },
{ "state": "close", "result": "successful", "alertResult": "0", "resultDes": "las pruebas no presentan ningun erorr", "resultScript": "script_1", "cardOK": "ok", "tablero": "Mi tablero", "state": "terminado", "indexIm": "2", "typeUS": "Process", "typeTest": "Test login SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "3", "date": Date.now(), "progress": 25 },
{ "state": "close", "result": "successful", "alertResult": "0", "resultDes": "las pruebas no presentan ningun erorr", "resultScript": "script_1", "cardOK": "ok", "indexIm": "3", "typeUS": "Business", "typeTest": "Test Injection SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "2", "scripts": "1", "date": Date.now(), "progress": 35 },
{ "state": "close", "result": "successful", "alertResult": "0", "resultDes": "las pruebas no presentan ningun erorr", "resultScript": "script_1", "cardOK": "ok", "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 55 },
{ "state": "close", "result": "successful", "alertResult": "0", "resultDes": "las pruebas no presentan ningun erorr", "resultScript": "script_1", "cardOK": "ok", "indexIm": "3", "typeUS": "Business", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "2", "scripts": "2", "date": Date.now(), "progress": 68 },
{ "state": "close", "cardOK": "ok", "indexIm": "2", "typeUS": "Process", "typeTest": "Test Injection SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 92 },
]
class CardList extends React.Component {

    state = {};

    componentDidMount() {
    }

    createCard(UserHistory, state) {
        let list = [];
        if (UserHistory != undefined && UserHistory != null && UserHistory !== "[]") {
            UserHistory.map((element, index) => {

                element["id"] = element.idUS ? element.idUS : "US-" + Date.now() + index;
                if (element.state === state) {
                    if (index === 0)
                        this.props.mainCard(element)
                    list.push(<Card card={element}></Card>);
                }
            });
        }
        return list;
    }

    render() {
        return (
            <div className='list_card_unit'>
                <div className='list_cards'>
                    {this.props.test === '2' ? this.createCard(this.props.uss, "close") : this.createCard(this.props.uss, "open")}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        uss: state.streams.uss
    };
};

export default connect(mapStateToProps, { mainCard })(CardList);



