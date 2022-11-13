import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import FormSyncro from './forms/form-Sync';
import Dashboard from './pages/dashboard';
import Sync from './pages/sync';
import Project from './pages/loaderProject';
import Intro from './pages/intro';
import FromMores from './forms/form-add-details';
import { GetHackToken } from '../apis/configBack';

class App extends React.Component {


  componentDidMount() {
    this.props.GetHackToken("123456789", "mariana@gmail.com")
  }

  componentDidUpdate() {

    let currentTimestamp = Date.now()
    if (this.props.token && currentTimestamp > Number(this.props.token.AtExpires) * 1000) {
      console.log(currentTimestamp)

      this.props.RefreshToken(this.props.token.AccessToken, this.props.token.RefreshToken)
      // this.props.DeleteToken(this.props.token.AccessToken)
    }
  }


  render() {
    return (
      <div className="container">
        <BrowserRouter history={history}>
          <div>
            <Routes>
              <Route path="/sync" exact element={<Sync />} />

              <Route path="/" exact element={<Intro />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/form/sync" exact element={<FormSyncro />} />
              <Route path="/technical" exact element={<FromMores />} />
              <Route path="/loader/project" exact element={<Project />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.streams.token,
  };
};


export default connect(mapStateToProps, { GetHackToken })(App);