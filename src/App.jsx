import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import css
import './App.css';

// import Page
import Home from './page/Home'


  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            exact
            element={
              <Home />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;