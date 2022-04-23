import React from 'react';
import { connect } from 'react-redux';
import './loader.scss';

class load extends React.Component {

  state = {
  };
  componentDidMount() {
  }

  render() {
    return (<div className="load">
      <hr /><hr /><hr /><hr />
    </div>
    );
  }
}


export default connect()(load);
