import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import css
import './App.css';

// import Page
import Home from './page/Home'
import Anglais from './page/Project/Anglais'
import Dualite from './page/Project/Dualite'
import NotFound from './page/NotFound';
import MentionsLegals from './page/MentionsLegals';
import EasterEgg from './page/EasterEgg';
import Soutiens from './page/Soutiens';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    easterEgg: [
      {
        name: 'test',
        description: 'testestestestest',
        found: false,
      },
      {
        name: 'test',
        description: 'testestestestest',
        found: false,
      },
      {
        name: 'test',
        description: 'testestestestest',
        found: false,
      },
    ]
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <Home data={data} setData={setData} />
          }
        />
        <Route
          path='/Projets/Anglais'
          exact
          element={
            <Anglais data={data} setData={setData} />
          }
        />
        <Route
          path='/Projets/Dualite'
          exact
          element={
            <Dualite data={data} setData={setData} />
          }
        />
        <Route
          path='/Easter_egg'
          exact
          element={
            <EasterEgg data={data} setData={setData} />
          }
        />
        <Route
          path='/Soutiens'
          exact
          element={
            <Soutiens data={data} setData={setData} />
          }
        />
        <Route
          path='/Mentions_legal'
          exact
          element={
            <MentionsLegals data={data} setData={setData} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;