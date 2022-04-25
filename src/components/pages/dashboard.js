import React from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import '../styles/myStyle.scss';
import Header from '../elements/header';
import Menu from '../elements/lateral-menu';


class Dashboard extends React.Component {

    state = { b: null, a: true };

    componentDidMount() {
        this.setState({
            b: <a href="#" className='icon_intro' onClick={() => { this.iconosInit() }}>
                <div id="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" className='logo_intro' >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M475.3571,413.24a69.9,69.9,0,0,0-39.8845-57.4407l-39.9287-18.7987,21.5791-44.5621a89.4527,89.4527,0,0,0,.0025-77.9684L359.7988,96.0682C317.7933,9.3105,194.2088,9.31,152.2019,96.0666L94.87,214.4745a89.445,89.445,0,0,0,.0049,77.9692l21.581,44.5569L76.5256,355.8a69.898,69.898,0,0,0-39.8831,57.439l-3.612,43.3773a22.5157,22.5157,0,0,0,22.4381,24.3842H456.5337A22.5134,22.5134,0,0,0,478.97,456.6187ZM364,260.1205a107.9746,107.9746,0,0,1-98.1035,107.5V341.1249a9.8965,9.8965,0,0,0-19.793,0v26.4957A107.9746,107.9746,0,0,1,148,260.1205V203.44a28.8192,28.8192,0,0,1,28.8193-28.8193H335.1806A28.8193,28.8193,0,0,1,364,203.44Z" /><path d="M321.8213,275.9979a9.91,9.91,0,0,0-12.3135,6.6709,13.5776,13.5776,0,0,1-26.0156,0,9.9026,9.9026,0,1,0-18.9844,5.6426,33.3877,33.3877,0,0,0,63.9844,0A9.9125,9.9125,0,0,0,321.8213,275.9979Z" /><path d="M240.8213,275.9979a9.8908,9.8908,0,0,0-12.3135,6.6709,13.5776,13.5776,0,0,1-26.0156,0,9.9026,9.9026,0,1,0-18.9844,5.6426,33.3877,33.3877,0,0,0,63.9844,0A9.9125,9.9125,0,0,0,240.8213,275.9979Z" /><path d="M319,227.4384H283a9.8965,9.8965,0,1,0,0,19.7929h36a9.8965,9.8965,0,1,0,0-19.7929Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M193,247.2313h36a9.8965,9.8965,0,1,0,0-19.7929H193a9.8965,9.8965,0,1,0,0,19.7929Z" />
                    </svg>
                </div>
            </a>
        })
    }

    variables() {
        return {
            "hu": "10 HU terminadas",
            "name": "Vecindario",
            "logo": "https://viewinmobiliario2.s3-sa-east-1.amazonaws.com/static_assets/vecindario-logo.svg",
        }
    }

    iconosInit() {
        let element = document.getElementById('menu');

        if (this.state.a === true) {
            element.classList.remove("menu_On");
            this.setState({
                b: <a href="#" className='icon_intro icon_intro_on' onClick={() => { this.iconosInit() }}>
                    <div id="svg-wrapperOff">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="white" className='logo_intro' >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.51935,33.88483l1.43323-1.59967a11.88788,11.88788,0,0,0,1.90319.51294l.43885,2.08783h3.4107l.43878-2.08783a11.88545,11.88545,0,0,0,1.90314-.51288L26.48041,33.885a13.96613,13.96613,0,0,0,2.93615-1.71643l-.66284-2.01831A12.06871,12.06871,0,0,0,30.14984,28.754l2.01837.663a13.96389,13.96389,0,0,0,1.71662-2.93634l-1.59961-1.43323a11.88774,11.88774,0,0,0,.51288-1.90319l2.08783-.43885v-3.4107L32.7981,18.8559a11.879,11.879,0,0,0-.51282-1.90314L33.885,15.51959a13.96613,13.96613,0,0,0-1.71643-2.93615l-2.01831.66284A12.064,12.064,0,0,0,28.754,11.85016l.663-2.01837a13.96389,13.96389,0,0,0-2.93634-1.71662L25.04742,9.71478a11.88774,11.88774,0,0,0-1.90319-.51288l-.43885-2.08783h-3.4107L18.8559,9.2019a11.88531,11.88531,0,0,0-1.90314.51282L15.51959,8.11505a13.96462,13.96462,0,0,0-2.93615,1.71643l.66284,2.01831A12.064,12.064,0,0,0,11.85016,13.246l-2.01837-.663a13.96322,13.96322,0,0,0-1.71656,2.93628l1.59961,1.43322a11.87909,11.87909,0,0,0-.51287,1.9032l-2.0879.43885v3.41076l2.08783.43878a11.87733,11.87733,0,0,0,.51282,1.90314L8.11505,26.48041a13.96613,13.96613,0,0,0,1.71643,2.93615l2.01831-.66284A12.064,12.064,0,0,0,13.246,30.14984l-.663,2.01837A13.96389,13.96389,0,0,0,15.51935,33.88483ZM13,21a8,8,0,1,1,8,8A8,8,0,0,1,13,21Z" />
                            <polygon points="19 17 19 25 25 21 19 17" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M48.48065,30.11517l-1.43323,1.59961a11.88774,11.88774,0,0,0-1.90319-.51288l-.43885-2.08783h-3.4107L40.8559,31.2019a11.88531,11.88531,0,0,0-1.90314.51282l-1.43317-1.59967a13.96462,13.96462,0,0,0-2.93615,1.71643l.66284,2.01831A12.064,12.064,0,0,0,33.85016,35.246l-2.01837-.663a13.96322,13.96322,0,0,0-1.71656,2.93628l1.59961,1.43322a11.87909,11.87909,0,0,0-.51287,1.9032l-2.0879.43885v3.41076l2.08783.43878a11.87733,11.87733,0,0,0,.51282,1.90314l-1.59967,1.43317a13.96613,13.96613,0,0,0,1.71643,2.93615l2.01831-.66284A12.064,12.064,0,0,0,35.246,52.14984l-.663,2.01837a13.96389,13.96389,0,0,0,2.93634,1.71662l1.43323-1.59967a11.88788,11.88788,0,0,0,1.90319.51294l.43885,2.08783h3.4107l.43878-2.08783a11.88545,11.88545,0,0,0,1.90314-.51288L48.48041,55.885a13.96613,13.96613,0,0,0,2.93615-1.71643l-.66284-2.01831A12.06871,12.06871,0,0,0,52.14984,50.754l2.01837.663a13.96389,13.96389,0,0,0,1.71662-2.93634l-1.59961-1.43323a11.88774,11.88774,0,0,0,.51288-1.90319l2.08783-.43885v-3.4107L54.7981,40.8559a11.879,11.879,0,0,0-.51282-1.90314L55.885,37.51959a13.96613,13.96613,0,0,0-1.71643-2.93615l-2.01831.66284A12.064,12.064,0,0,0,50.754,33.85016l.663-2.01837A13.96389,13.96389,0,0,0,48.48065,30.11517ZM51,43a8,8,0,1,1-8-8A8,8,0,0,1,51,43Z" /><polygon points="41 47 47 43 41 39 41 47" /><path d="M24.26465,46.16992A19.00075,19.00075,0,1,0,43,24v2A17,17,0,1,1,26,43a1,1,0,0,0-1.85742-.51465l-3,5,1.71484,1.0293Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21,40V38A17,17,0,1,1,38,21a1,1,0,0,0,1.85742.51465l3-5-1.71484-1.0293-1.40723,2.34473A19.00075,19.00075,0,1,0,21,40Z" />
                        </svg>
                    </div>
                </a>
            })
        }
        else {
            element.classList.add("menu_On");
            this.setState({
                b: <a href="#" className='icon_intro' onClick={() => { this.iconosInit() }}>
                    <div id="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" className='logo_intro' >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M475.3571,413.24a69.9,69.9,0,0,0-39.8845-57.4407l-39.9287-18.7987,21.5791-44.5621a89.4527,89.4527,0,0,0,.0025-77.9684L359.7988,96.0682C317.7933,9.3105,194.2088,9.31,152.2019,96.0666L94.87,214.4745a89.445,89.445,0,0,0,.0049,77.9692l21.581,44.5569L76.5256,355.8a69.898,69.898,0,0,0-39.8831,57.439l-3.612,43.3773a22.5157,22.5157,0,0,0,22.4381,24.3842H456.5337A22.5134,22.5134,0,0,0,478.97,456.6187ZM364,260.1205a107.9746,107.9746,0,0,1-98.1035,107.5V341.1249a9.8965,9.8965,0,0,0-19.793,0v26.4957A107.9746,107.9746,0,0,1,148,260.1205V203.44a28.8192,28.8192,0,0,1,28.8193-28.8193H335.1806A28.8193,28.8193,0,0,1,364,203.44Z" /><path d="M321.8213,275.9979a9.91,9.91,0,0,0-12.3135,6.6709,13.5776,13.5776,0,0,1-26.0156,0,9.9026,9.9026,0,1,0-18.9844,5.6426,33.3877,33.3877,0,0,0,63.9844,0A9.9125,9.9125,0,0,0,321.8213,275.9979Z" /><path d="M240.8213,275.9979a9.8908,9.8908,0,0,0-12.3135,6.6709,13.5776,13.5776,0,0,1-26.0156,0,9.9026,9.9026,0,1,0-18.9844,5.6426,33.3877,33.3877,0,0,0,63.9844,0A9.9125,9.9125,0,0,0,240.8213,275.9979Z" /><path d="M319,227.4384H283a9.8965,9.8965,0,1,0,0,19.7929h36a9.8965,9.8965,0,1,0,0-19.7929Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M193,247.2313h36a9.8965,9.8965,0,1,0,0-19.7929H193a9.8965,9.8965,0,1,0,0,19.7929Z" />
                        </svg>
                    </div>
                </a>
            })
        }

        this.setState({ a: !this.state.a });
    }


    render() {
        let variables = this.variables();
        return (
            <div className='dash'>
                <Header headers={variables} />
                <div className="body">

                    <Menu />
                    <main class="main">
                        <div class="main__col-2 menu_On" id="menu">
                            <div class="main__cards-container">
                                <div class="main__cards-container-heading-wrap">
                                    <h2 class="main__cards-container-heading ss-heading">Traveling Plans</h2>
                                    <a href="#" class="ss-show">show all</a>
                                </div>


                                <ul class="main__cards">
                                    <li class="main__card">
                                        <div class="main__card-image-container">
                                            <img src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" class="main__card-image" />
                                        </div>
                                        <h3 class="main__card-heading">Daman-e-Koh</h3>
                                        <p class="main__card-heading-sub">Pakistan</p>
                                        <p class="main__card-heading-type">Visit</p>
                                    </li>

                                    <li class="main__card" >
                                        <div class="main__card-image-container">
                                            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" class="main__card-image" />
                                        </div>
                                        <h3 class="main__card-heading">Mahodand Lake</h3>
                                        <p class="main__card-heading-sub">Pakistan</p>
                                        <p class="main__card-heading-type">Visit</p>
                                    </li>

                                    <li class="main__card" >
                                        <div class="main__card-image-container">
                                            <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" class="main__card-image" />
                                        </div>
                                        <h3 class="main__card-heading">London</h3>
                                        <p class="main__card-heading-sub">England</p>
                                        <p class="main__card-heading-type">Work</p>
                                    </li>
                                </ul>


                            </div>

                        </div>

                        {this.state.b}


                    </main>

                </div >

            </div >
        )

    }
}


export default connect()(Dashboard);
