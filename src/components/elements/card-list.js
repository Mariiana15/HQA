import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import '../styles/myStyle.scss';
import Card from './card';
import { mainCard, filterSearch, filterSpring } from '../../actions';
import Config from '../utils/configuration.json';
import { GetSortStory, GetSortStoryMay } from '../utils';

let daysSpring = Config.daysSpring;

class CardList extends React.Component {

    state = { storyUser: null, storyDiv: null, storyFlag: false, stories: null, flag: false };

    componentDidMount() {

        this.createUserStory();
    }

    createUserStory() {

        let typeStory = this.props.typetUs === '2' ? 'close' : 'open';
        this.setState({ storyDiv: this.createCard(this.props.storyUS, typeStory) })
        this.Story = this.createCard(this.props.storyUS, typeStory);

        this.timeout3 = setTimeout(() => {
            this.setState({ flag: true });
        }, 5000);
    }

    orderOptions(stories) {

        if (this.props.order && this.props.order.length > 0) {
            this.props.order.map((element) => {
                if (element === 'priority') { stories.sort(GetSortStoryMay("priority")) }
                else if (element === 'discovery') { stories.sort(GetSortStoryMay("alerts")) }
                else if (element === 'date') { stories.sort(GetSortStory("date")) }
                return element
            })
        }
        return stories
    }

    createCard(stories, state, filter, fillSpring) {

        let list = [];
        let empty_list = <div key="1" className='empty_list'>Don't have user story in state "{state}"</div>
        if (stories !== undefined && stories != null) {
            if (stories === "[]") {
                list.push(empty_list);
            }
            else {
                let index = 0;
                stories = this.orderOptions(stories)
                stories.map((element) => {
                    element["id"] = element.idUS ? element.idUS : "US-" + Date.now() + index;
                    if (element.state === state) {
                        if (filter) {
                            if (element.name.includes(filter) || element.notes.includes(filter)) {
                                list.push(<Card key={index} card={element}></Card>);
                                index++;
                            }
                        }
                        else if (fillSpring && fillSpring === "spring") {
                            let d1 = new Date(Number(element.date) * 1000);
                            let d2 = new Date();
                            d2.setDate(d2.getDate() - daysSpring)
                            if (d1 >= d2) {
                                list.push(<Card key={index} card={element}></Card>);
                                index++;
                            }
                        }
                        else {
                            list.push(<Card key={index} card={element}></Card>);
                            index++;
                        }
                        if (index === 1)
                            this.props.mainCard(element)
                    }
                    return element
                }, filter);
                if (list.length > 0) {
                    this.setState({ stories: list.length })
                }
            }
            if (list.length === 0) {
                list.push(empty_list);
            }

        }


        return list;
    }

    componentDidUpdate() {

        if (this.props.filter !== undefined) {
            let typeStory = this.props.typetUs === '2' ? 'close' : 'open';;
            let storyUS = this.props.storyUS;
            let fill = this.props.filter
            this.setState({ storyDiv: this.createCard(storyUS, typeStory, fill, null) });
            this.props.filterSearch(undefined);
        }
        if (this.props.filterSprings !== undefined) {
            let typeStory = this.props.typetUs === '2' ? 'close' : 'open';;
            let storyUS = this.props.storyUS;
            let fill = this.props.filterSprings
            this.setState({ storyDiv: this.createCard(storyUS, typeStory, null, fill) });
            this.props.filterSpring(undefined);
        }

    }




    render() {



        if (this.state.stories && this.props.storyUS.length !== this.state.stories && this.state.flag) {
            let typeStory = this.props.typetUs === '2' ? 'close' : 'open';
            this.setState({ storyDiv: this.createCard(this.props.storyUS, typeStory) })
            this.setState({ flag: false })
            this.timeout3 = setTimeout(() => {
                this.setState({ flag: true });
            }, 1200);
        }

        return (
            <div className='list_card_unit' key="1">
                <div className='list_cards'>
                    {this.state.storyDiv}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        filter: state.streams.filter,
        filterSprings: state.streams.filterSprings,
        order: state.streams.order,
        uss: state.streams.uss,
    };
};

export default connect(mapStateToProps, { mainCard, filterSearch, filterSpring })(CardList);



