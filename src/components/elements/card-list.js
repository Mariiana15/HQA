import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Card from './card';
import { mainCard } from '../../actions';

const US = [{ "cardOK": "ok", "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 15 },

{ "tablero": "Mi tablero", "state": "terminado", "idUS": "US-123123", "indexIm": "2", "typeUS": "Process", "typeTest": "Test login SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "3", "date": Date.now(), "progress": 25 },
{ "indexIm": "3", "typeUS": "Business", "typeTest": "Test Injection SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "2", "scripts": "1", "date": Date.now(), "progress": 35 },
{ "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 55 },
{ "cardOK": "ok", "indexIm": "3", "typeUS": "Business", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "2", "scripts": "2", "date": Date.now(), "progress": 68 },
{ "indexIm": "2", "typeUS": "Process", "typeTest": "Test Injection SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 92 },
]
class CardList extends React.Component {

    state = {};

    componentDidMount() {
    }

    createCard() {
        let list = [];
        US.forEach((element, index) => {
            element["id"] = element.idUS ? element.idUS : "US-" + Date.now() + index;
            if (index === 0)
                this.props.mainCard(element)
            list.push(<Card card={element}></Card>);
        });
        return list;
    }

    render() {
        return (
            <div className='list_card_unit'>
                <div className='row'>
                    <div className='col-3'>
                        <hr class="bg-danger border-2 border-top " />
                    </div>
                    <div className='col'>
                        <div>{this.props.tablero}</div>
                    </div>
                    <div className='col-4'>
                        <hr class="bg-danger border-2 border-top " />
                    </div>
                </div>
                <div className='list_cards'>
                    {this.createCard()}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {  };
};

export default connect(mapStateToProps, { mainCard })(CardList);