import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import NavCard from '../elements/card-nav';

class CardFilter extends React.Component {

    state = { current: 'cardAll' };

    componentDidMount() {
    }



    render() {
        return (
            <div className='row row_card_main'>
                <div className='row'>
                    <div className='col-4'>
                        <NavCard />
                    </div>
                    <div className='col-4 offset-md-3'>
                        <div className="search search_filter">
                            <input type="text" className="search__input" placeholder="Search..." />
                            <div className="search__icon">
                                <ion-icon name="search"></ion-icon>
                            </div>
                        </div>

                </div>
                <div className='row'>
                    </div>
                    <div className='col-6 row_filter_a'>
                        <div className='row'>
                            <div className='col-4 col_filter_a'>
                                <div className="btn btn__primary btn_menu_card" >
                                    <p className='name_priority'>Priority</p>
                                    <svg viewBox="0 0 28 28" className='icon_priority' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15,5 L21,5 C21.55,5 22,5.45 22,6 C22,6.55 21.55,7 21,7 L15,7 C14.45,7 14,6.55 14,6 C14,5.45 14.45,5 15,5 Z M15,10.5 L21,10.5 C21.55,10.5 22,10.95 22,11.5 C22,12.05 21.55,12.5 21,12.5 L15,12.5 C14.45,12.5 14,12.05 14,11.5 C14,10.95 14.45,10.5 15,10.5 Z M15,16 L21,16 C21.55,16 22,16.45 22,17 C22,17.55 21.55,18 21,18 L15,18 C14.45,18 14,17.55 14,17 C14,16.45 14.45,16 15,16 Z M9.85,19.15 L11.64,17.36 C11.84,17.16 11.84,16.85 11.64,16.65 L9.85,14.86 C9.54,14.54 9,14.76 9,15.21 L9,18.8 C9,19.24 9.54,19.46 9.85,19.15 Z M9,16 L8.7,16 C6.35,16 4.25,14.29 4.02,11.95 C3.76,9.27 5.87,7 8.5,7 L11,7 C11.55,7 12,6.55 12,6 C12,5.45 11.55,5 11,5 L8.5,5 C4.64,5 1.54,8.4 2.06,12.36 C2.48,15.64 5.43,18 8.73,18 L9,18 L9,16 Z"  >
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className='col-4 col_filter_a'>
                                <div className="btn btn__primary btn_menu_card" >
                                    <p className='name_priority'>Discovery</p>
                                    <svg viewBox="0 0 80 80" className='icon_discovery' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M57.82,57.54H6.18a3.2,3.2,0,0,1-2.75-4.77L29.25,8.05a3.17,3.17,0,0,1,5.5,0L60.57,52.77A3.2,3.2,0,0,1,57.82,57.54ZM32,8.46a1.17,1.17,0,0,0-1,.59L5.16,53.77a1.18,1.18,0,0,0,1,1.77H57.82a1.17,1.17,0,0,0,1-.59,1.16,1.16,0,0,0,0-1.18L33,9.05A1.16,1.16,0,0,0,32,8.46Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32.45,16h-.9a3.13,3.13,0,0,0-3.13,3.12V38.37a3.13,3.13,0,0,0,3.13,3.12h.9a3.13,3.13,0,0,0,3.13-3.12V19.14A3.13,3.13,0,0,0,32.45,16Zm1.13,22.35a1.12,1.12,0,0,1-1.13,1.12h-.9a1.13,1.13,0,0,1-1.13-1.12V19.14A1.13,1.13,0,0,1,31.55,18h.9a1.12,1.12,0,0,1,1.13,1.12Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32,44.32a3.58,3.58,0,0,0,0,7.16A3.58,3.58,0,0,0,32,44.32Zm0,5.16a1.58,1.58,0,0,1,0-3.16A1.58,1.58,0,0,1,32,49.48Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="btn btn__primary btn_menu_card_date" >
                                    <p className='name_priority'> Date</p>
                                    <svg viewBox="0 0 24 24" className='icon_date' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7,11 L9,11 L9,13 L7,13 L7,11 Z M21,6 L21,20 C21,21.1 20.1,22 19,22 L5,22 C3.89,22 3,21.1 3,20 L3.01,6 C3.01,4.9 3.89,4 5,4 L6,4 L6,2 L8,2 L8,4 L16,4 L16,2 L18,2 L18,4 L19,4 C20.1,4 21,4.9 21,6 Z M5,8 L19,8 L19,6 L5,6 L5,8 Z M19,20 L19,10 L5,10 L5,20 L19,20 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z" ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


export default connect()(CardFilter);
