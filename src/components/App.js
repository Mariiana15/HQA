import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import Word from './forms/formSync';

import Sync from './pages/dashboard';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <div>
          <Routes>
            <Route path="/" exact element={  <Word />} />
            <Route path="/jose" exact element={  <Sync />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;