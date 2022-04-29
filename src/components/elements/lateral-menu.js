import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import { pageDash } from '../../actions';
import Home from '../pages/home';
import Loader from '../pages/loader';

class LateralMenu extends React.Component {

    state = {};

    componentDidMount() {
        this.currentMenu = 'home'
    }

    changeMenu(menu) {
        if (menu === 'home')
            this.props.pageDash(<Home></Home>);
        else
            this.props.pageDash(<Loader message="Lo estamos preparando para ti"></Loader>);

        let element = document.getElementById(menu);
        element.classList.add("sidebar__icon_on");
        if (menu != this.currentMenu) {
            element = document.getElementById(this.currentMenu);
            element.classList.remove("sidebar__icon_on");
            this.currentMenu = menu;
        }

    }

    render() {
        return (
            <div>
                <div className="sidebar left">
                    <div className="sidebar__icon sidebar__icon_on " id='home' onClick={() => { this.changeMenu('home') }}>
                        <div className='row '>
                            <div className='col-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <div className='col-1 menu_lateral'>
                                <a className='name'>Home</a>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar__icon" id='sec' onClick={() => { this.changeMenu('sec') }}>
                        <div className='row justify-content-around'>
                            <div className='col-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24.1,13H7.9c-1.2,0-2.3-0.6-3-1.6L4,10l12-6l12,6l-0.9,1.4C26.4,12.4,25.3,13,24.1,13z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.8,17.8c-0.6-0.7-1.2-1-1.8-0.8c-0.9,0.4-1.2,2-0.7,3.6c0.5,1.6,1.7,2.7,2.6,2.3c0,0,0.1,0,0.1-0.1c0.8,3.5,3.6,6.1,7,6.1s6.3-2.6,7-6.1c0,0,0.1,0.1,0.1,0.1c0.9,0.4,2.1-0.7,2.6-2.3C26.3,19,26,17.4,25,17c-0.6-0.2-1.3,0.1-1.8,0.8" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.8,18H10.2C8.5,18,7,16.5,7,14.8V13h18v1.8C25,16.5,23.5,18,21.8,18z" />
                                </svg>
                            </div>
                            <div className='col-1 menu_lateral'>
                                <a className='name'>Script</a>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar__icon" id='met' onClick={() => { this.changeMenu('met') }}>
                        <div className='row justify-content-around'>
                            <div className='col-8 iconMenu'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className='col-1 menu_lateral'>
                                <a className='metrics'>Metrics</a>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar__icon" id='tests' onClick={() => { this.changeMenu('tests') }}>
                        <div className='row justify-content-around'>
                            <div className='col-8 menu_lateral'>
                                <svg className='iconTest' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5,3 L9.00276013,3 C7.89666625,3 7,3.89833832 7,5.00732994 L7,27.9926701 C7,29.1012878 7.89092539,30 8.99742191,30 L24.0025781,30 C25.1057238,30 26,29.1017876 26,28.0092049 L26,10.5 L26,10 L20,3 L19.5,3 L19.5,3 L19.5,3 Z M19,4 L8.9955775,4 C8.44573523,4 8,4.45526288 8,4.99545703 L8,28.004543 C8,28.5543187 8.45470893,29 8.9999602,29 L24.0000398,29 C24.5523026,29 25,28.5550537 25,28.0066023 L25,11 L20.9979131,11 C19.8944962,11 19,10.1134452 19,8.99408095 L19,4 L19,4 Z M20,4.5 L20,8.99121523 C20,9.54835167 20.4506511,10 20.9967388,10 L24.6999512,10 L20,4.5 L20,4.5 Z M17,18 L15,26 L16,26 L18,18 L17,18 L17,18 Z M13,25 L10,22 L13,19 L13.6999998,19.6999998 L11.3999996,22 L13.6999998,24.3000002 L13,25 L13,25 Z M20,25 L23,22 L20,19 L19.3000002,19.6999998 L21.6000004,22 L19.3000002,24.3000002 L20,25 L20,25 Z" id="document-code" ></path>
                                </svg>
                            </div>
                            <div className='col-1 menu_lateral'>
                                <a className='test'>Test</a>
                            </div>
                        </div>
                    </div>



                    <div className="sidebar__icon" id='integrations' onClick={() => { this.changeMenu('integrations') }}>
                        <div className='row justify-content-around'>
                            <div className='col-8 iconMenuInt'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M27.71 2.5H8C6.54212 2.50264 5.14471 3.08295 4.11383 4.11383C3.08295 5.14471 2.50264 6.54212 2.5 8V27.71C2.5 28.1078 2.65804 28.4894 2.93934 28.7707C3.22064 29.052 3.60218 29.21 4 29.21H23.71C25.1687 29.21 26.5676 28.6305 27.5991 27.5991C28.6305 26.5676 29.21 25.1687 29.21 23.71V4C29.21 3.60218 29.052 3.22064 28.7707 2.93934C28.4894 2.65804 28.1078 2.5 27.71 2.5ZM26.21 23.71C26.21 24.0383 26.1453 24.3634 26.0197 24.6667C25.8941 24.97 25.7099 25.2456 25.4778 25.4778C25.2456 25.7099 24.97 25.8941 24.6667 26.0197C24.3634 26.1453 24.0383 26.21 23.71 26.21H5.5V8C5.5 7.33696 5.76339 6.70107 6.23223 6.23223C6.70107 5.76339 7.33696 5.5 8 5.5H26.21V23.71Z" fill="black" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M23.71 34.79H4C3.60218 34.79 3.22064 34.9481 2.93934 35.2294C2.65804 35.5107 2.5 35.8922 2.5 36.29V56C2.50264 57.4579 3.08295 58.8553 4.11383 59.8862C5.14471 60.9171 6.54212 61.4974 8 61.5H27.71C28.1078 61.5 28.4894 61.342 28.7707 61.0607C29.052 60.7794 29.21 60.3979 29.21 60V40.29C29.21 38.8313 28.6305 37.4324 27.5991 36.401C26.5676 35.3695 25.1687 34.79 23.71 34.79V34.79ZM26.21 58.5H8C7.33696 58.5 6.70107 58.2366 6.23223 57.7678C5.76339 57.299 5.5 56.6631 5.5 56V37.79H23.71C24.0383 37.79 24.3634 37.8547 24.6667 37.9803C24.97 38.106 25.2456 38.2901 25.4778 38.5223C25.7099 38.7544 25.8941 39.03 26.0197 39.3333C26.1453 39.6366 26.21 39.9617 26.21 40.29V58.5Z" fill="black" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M60 34.79H40.29C38.8313 34.79 37.4324 35.3695 36.401 36.401C35.3695 37.4324 34.79 38.8313 34.79 40.29V60C34.79 60.3979 34.9481 60.7794 35.2294 61.0607C35.5107 61.342 35.8922 61.5 36.29 61.5H56C57.4579 61.4974 58.8553 60.9171 59.8862 59.8862C60.9171 58.8553 61.4974 57.4579 61.5 56V36.29C61.5 35.8922 61.342 35.5107 61.0607 35.2294C60.7794 34.9481 60.3979 34.79 60 34.79ZM58.5 56C58.5 56.6631 58.2366 57.299 57.7678 57.7678C57.299 58.2366 56.6631 58.5 56 58.5H37.79V40.29C37.79 39.627 38.0534 38.9911 38.5223 38.5223C38.9911 38.0534 39.627 37.79 40.29 37.79H58.5V56Z" fill="black" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M40.29 21.36H42.64V23.71C42.64 25.1687 43.2195 26.5676 44.2509 27.5991C45.2824 28.6305 46.6813 29.21 48.14 29.21C49.5987 29.21 50.9977 28.6305 52.0291 27.5991C53.0606 26.5676 53.64 25.1687 53.64 23.71V21.36H56C57.4587 21.36 58.8577 20.7805 59.8891 19.7491C60.9206 18.7176 61.5 17.3187 61.5 15.86C61.5 14.4013 60.9206 13.0024 59.8891 11.9709C58.8577 10.9395 57.4587 10.36 56 10.36H53.64V8C53.64 6.54131 53.0606 5.14236 52.0291 4.11091C50.9977 3.07946 49.5987 2.5 48.14 2.5C46.6813 2.5 45.2824 3.07946 44.2509 4.11091C43.2195 5.14236 42.64 6.54131 42.64 8V10.36H40.29C38.8313 10.36 37.4324 10.9395 36.401 11.9709C35.3695 13.0024 34.79 14.4013 34.79 15.86C34.79 17.3187 35.3695 18.7176 36.401 19.7491C37.4324 20.7805 38.8313 21.36 40.29 21.36V21.36ZM40.29 13.36H44.14C44.5379 13.36 44.9194 13.202 45.2007 12.9207C45.482 12.6394 45.64 12.2578 45.64 11.86V8C45.64 7.33696 45.9034 6.70107 46.3723 6.23223C46.8411 5.76339 47.477 5.5 48.14 5.5C48.8031 5.5 49.439 5.76339 49.9078 6.23223C50.3766 6.70107 50.64 7.33696 50.64 8V11.86C50.64 12.2578 50.7981 12.6394 51.0794 12.9207C51.3607 13.202 51.7422 13.36 52.14 13.36H56C56.6631 13.36 57.299 13.6234 57.7678 14.0922C58.2366 14.5611 58.5 15.197 58.5 15.86C58.5 16.523 58.2366 17.1589 57.7678 17.6278C57.299 18.0966 56.6631 18.36 56 18.36H52.14C51.7422 18.36 51.3607 18.518 51.0794 18.7993C50.7981 19.0806 50.64 19.4622 50.64 19.86V23.71C50.64 24.373 50.3766 25.0089 49.9078 25.4778C49.439 25.9466 48.8031 26.21 48.14 26.21C47.477 26.21 46.8411 25.9466 46.3723 25.4778C45.9034 25.0089 45.64 24.373 45.64 23.71V19.86C45.64 19.4622 45.482 19.0806 45.2007 18.7993C44.9194 18.518 44.5379 18.36 44.14 18.36H40.29C39.627 18.36 38.9911 18.0966 38.5223 17.6278C38.0534 17.1589 37.79 16.523 37.79 15.86C37.79 15.197 38.0534 14.5611 38.5223 14.0922C38.9911 13.6234 39.627 13.36 40.29 13.36V13.36Z" fill="black" />
                                </svg>
                            </div>
                            <div className='col-1 menu_lateral'>
                                <a className='integ'>Integrations</a>
                            </div>
                        </div>
                    </div>


                    <div className="sidebar__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                </div>
            </div >
        )
    }
}



const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, { pageDash })(LateralMenu);
