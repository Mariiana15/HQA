import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';

class CardIndex extends React.Component {

    state = { current: 0, arrayCurrent: [1, 2, 3, 4, 5] };

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.loadPageCard();
        }, 2000)

    }

    loadPageCard() {
        let c = document.getElementById('card_cont')
        let indexs = Array.from(document.querySelectorAll('.index'))
        console.log(c)
        console.log(indexs)
        let cur = -1
        indexs.forEach((index, i) => {
            index.addEventListener('click', (e) => {
                // clear
                c.className = 'container'
                void c.offsetWidth; // Reflow
                c.classList.add('open')

                if (this.state.arrayCurrent[4] > 9) { c.classList.add(`i${i + 1}${i + 1}`) }
                else { c.classList.add(`i${i + 1}`) }

                if (cur > i) {
                    c.classList.add('flip')
                }
                if (i === 4 || i === 0) {
                    let current_index = this.state.arrayCurrent[4];
                    if (i === 0)
                        current_index = this.state.arrayCurrent[0];

                    if (current_index > 1) {
                        this.renderIndex(current_index);
                        this.setState({ current: current_index });

                        this.timeout = setTimeout(() => {
                            c.classList.remove('open')
                            c.classList.remove(`i${i + 1}`)
                            c.classList.remove(`i${i + 1}${i + 1}`)
                            c.classList.add('open')

                            if (current_index - 2 > 9) { c.classList.add(`i33`) }
                            else { c.classList.add(`i3`) }

                        }, 1000)
                    }
                }
                cur = i
            })
        })
    }

    renderIndex(i) {
        this.setState({ arrayCurrent: [i - 2, i - 1, i, i + 1, i + 2] })
    }




    createIndex(arr) {
        let list = [];
        arr.forEach(element => {
            list.push(<div class="index">{element}</div>);
        });
        return list;
    }


    render() {
        return (
            <div className='row'>
                <div className='col-3 offset-md-4'>
                    <div class="container___" >
                        <div class="container" id="card_cont"  >
                            <span>
                                {
                                    this.createIndex(this.state.arrayCurrent)
                                }
                            </span>
                            <svg viewBox="0 0 100 100">
                                <path className=''
                                    d="m 7.1428558,49.999998 c -1e-7,-23.669348 19.1877962,-42.8571447 42.8571442,-42.8571446 23.669347,0 42.857144,19.1877966 42.857144,42.8571446" />
                            </svg>
                            <svg viewBox="0 0 100 100">
                                <path className=''
                                    d="m 7.1428558,49.999998 c -1e-7,23.669347 19.1877962,42.857144 42.8571442,42.857144 23.669347,0 42.857144,-19.187797 42.857144,-42.857144" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { card_: state.streams.card };
};


export default connect(mapStateToProps)(CardIndex);
