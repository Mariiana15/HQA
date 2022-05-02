import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import FormSyncro from './forms/form-Sync';
import Dashboard from './pages/dashboard';
import Sync from './pages/sync';
import FromMores from './forms/form-add-details';


const App = () => {
  return (
    <div className="container">
      <BrowserRouter history={history}>
        <div>
          <Routes>
            <Route path="/" exact element={<Sync />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/sync" exact element={<FormSyncro />} />
            <Route path="/tecnichal" exact element={<FromMores/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;