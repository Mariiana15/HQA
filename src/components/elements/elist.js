import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import EleList from './element-list';
import { setMenu } from '../../actions';
import EForm from './eform'; 

const opciones = [{ "id": "1", "head": "18 User story", "shead": "Analyze", "etype": "Show more" },
{ "id": "2", "head": "5 User story", "shead": "In testing", "etype": "Show more" },
{ "id": "3", "head": "13 User story", "shead": "Tested", "etype": "Show more" },
{ "id": "4", "head": "4 Alerts", "shead": "Created", "etype": "Show more" },
{ "id": "5", "head": "3 Alerts", "shead": "Ejecution", "etype": "Show more" },
{ "id": "6", "head": "6 Tests", "shead": "Created", "etype": "Show more" },
{ "id": "7", "head": "5 Tests", "shead": "In use", "etype": "Show more" }]

class EList extends React.Component {

    state = { index: 1 };

    componentDidMount() {

    }

    nextElement() {

        let list = document.getElementById('elist');
        if (this.state.index + 2 < list.childElementCount) {
            let element = document.getElementById('elist1');
            list.scroll((element.clientWidth * 1.09) + list.scrollLeft, 0);
            let index = document.getElementById('indexElement' + (this.state.index + 2));
            index.classList.add("index_menu_card");
            index = document.getElementById('indexElement' + (this.state.index + 1));
            index.classList.remove("index_menu_card");
            this.setState({ index: this.state.index + 1 });
        }
    }

    lastElement() {

        let list = document.getElementById('elist');
        if (this.state.index > 1) {
            let index = document.getElementById('indexElement' + (this.state.index + 1));
            index.classList.remove("index_menu_card");
            index = document.getElementById('indexElement' + (this.state.index));
            index.classList.add("index_menu_card");
            let element = document.getElementById('elist1');
            list.scroll(list.scrollLeft - (element.clientWidth * 1.09), 0);
            this.setState({ index: this.state.index - 1 });

        }
    }

    createOptions() {

        let list = [];
        opciones.forEach(element => {
            list.push(<EleList key={element.id} id={element.id} head={element.head} shead={element.shead} etype={element.etype} />);
        });
        return list;
    }

    createIndicator() {
        let list = [];
        opciones.forEach((element, ind) => {
            list.push(<span key={ind} id={`indexElement${ind}`}></span>);
        });
        return list;

    }

    CallForm() {
        this.props.setMenu(<EForm title="Your Activity" form="sync" typeWindow="subMenu" />)
    }

    render() {

        return (
            <div className="main__cards-container">
                <div className="main__cards-container-heading-wrap">
                    <h2 className="main__cards-container-heading ss-heading">{this.props.title}</h2>
                </div>
                <ul className="main__cards" id='elist'>
                    {this.createOptions()}
                </ul>
                <div className="main__cards-pagination">
                    <span className="ss-dots">
                        {this.createIndicator()}
                    </span>
                    <div className="main__cards-buttons">
                        <button onClick={() => { this.lastElement() }} className="btn_cards_change">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className='change_image' >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={() => { this.nextElement() }} className="btn_cards_change">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className='change_image' >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='btn call_form_menu' onClick={() => { this.CallForm() }}>
                    <h3>Add Project</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, { setMenu })(EList);
