import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import Word from './pages/sync';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <div>
          <Routes>
            <Route path="/" exact element={  <Word />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;