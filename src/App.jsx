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
import { useEffect, useState } from 'react';

function App() {
  const storedData = localStorage.getItem('easterEggData');
  const initialData = storedData ? JSON.parse(storedData) : {
    easterEgg: {
      HeaderCompongnement: {
        name: 'BuBul',
        description: 'Vous avez trouvé les bulles, mais avez-vous trouvé Bubul ?',
        found: false,
      },
      ohhhhhhhhNonnnnnn: {
        name: 'Oh Non',
        description: 'Ohhhhhhhh Nonnnnnn tu as trouver mon secrets',
        found: false,
      },
      paypal: {
        name: 'paypal',
        description: 'Il semblerais que tu sais sur qu\'elle page se cache notre paypal mais pourras tu le trouver ?',
        found: false,
      },
    }
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem('easterEggData', JSON.stringify(data));
  }, [data])


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