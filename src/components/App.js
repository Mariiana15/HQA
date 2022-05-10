import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import FormSyncro from './forms/form-Sync';
import Dashboard from './pages/dashboard';
import Sync from './pages/sync';
import FromMores from './forms/form-add-details';
import { GetHackToken } from '../apis/configBack'
class App extends React.Component {


  componentDidMount() {

    this.props.GetHackToken("123456789", "mariana@gmail.com")
  }


  render() {
    return (
      <div className="container">
        <BrowserRouter history={history}>
          <div>
            <Routes>
              <Route path="/" exact element={<Sync />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/sync" exact element={<FormSyncro />} />
              <Route path="/technical" exact element={<FromMores />} />
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