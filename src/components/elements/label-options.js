import React from 'react';
import { connect } from 'react-redux';
import '../styles/mariana.scss';
import '../styles/myStyle.scss';

class LabelOptions extends React.Component {

    state = {};

    componentDidMount() {
    }

    GenerateLabelOptions() {

        let list = [];
        this.props.optionsLabel.forEach(element => {
            list.push(<div className="chip chip-checkbox " key={element} onClick={() => { this.activateCheck(element) }} id={element} tabIndex="0" aria-labelledby="addDramaChip">
                <input type="checkbox" />
                <i className="material-icons chip-add-icon"></i>
                <span id="addDramaChip">{element}</span>
            </div>)

        });
        return list;
    }
    activateCheck(name) {

        let element = document.getElementById(name);
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.setAttribute("aria-checked", "false");

        }
        else {
            element.classList.add("active");
            element.setAttribute("aria-checked", "true");

        }
    }

    render() {
        
        return (
            <div className="chip-group" tabIndex="-1">
                {this.GenerateLabelOptions()}
            </div>

        )
    }

}


export default connect()(LabelOptions);
