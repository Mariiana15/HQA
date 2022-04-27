import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Card from './card';

const US = [{ "cardOK": "ok", "indexIm": "1", "typeUS": "Alert", "typeTest": "Test login Xss", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "1", "date": Date.now(), "progress": 15 },

{ "indexIm": "2", "typeUS": "Process", "typeTest": "Test login SQL", "US": "Como usuario quiero validar si me encuentro registrado en la plataforma", "alerts": "1", "scripts": "3", "date": Date.now(), "progress": 25 },
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
        US.forEach(element => {
            list.push(<Card cardOK={element.cardOK} indexIm={element.indexIm} typeUS={element.typeUS} typeTest={element.typeTest} US={element.US} alerts={element.alerts} scripts={element.scripts} date={element.date} progress={element.progress}></Card>);
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
                        <div>Tablero Mi primera prueba</div>
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


export default connect()(CardList);
