import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

// import css
import './App.css';

// import Page
import Home from './page/Home'
import Anglais from './page/Project/Anglais'
import Dualite from './page/Project/Dualite'
import NotFound from './page/NotFound';
import EasterEgg from './page/EasterEgg';
import Soutiens from './page/Soutiens';
import Romance from './page/Project/Romance'
import Contact from './page/Contact'

// import Contact from './page/Contact';
import { useEffect, useState } from 'react';
import EasterEggPopup from './compoments/fixed/popup/EasterEgg/EasterEggPopup';

function App() {
  const storedData = localStorage.getItem('easterEggData');
  const storedDataVersions = localStorage.getItem('DataVersions');
  let versionInegual = false

  const [foundName, setFoundName] = useState('');
  const version = "0.1.1";
  const updatedData = {
    easterEgg: {
      buBul: {
        name: 'buBul',
        description: 'Vous avez trouvé les bulles, mais avez-vous trouvé Bubul ?',
        found: false,
      },
      ohhhhhhhhNonnnnnn: {
        name: 'OhhhhNonnnnn',
        description: 'Ohhhhhhhh Nonnnnnn tu as trouvé mon secret',
        found: false,
      },
      paypal: {
        name: 'paypal',
        description: 'Il semble que tu saches sur quelle page se cache notre Paypal, mais pourras-tu le trouver ?',
        found: false,
      },
      rickRoll: {
        name: 'rick roll',
        description: 'Never Gonna Give You Up. Never Gonna Let You Down, Never gonna run Around, And Desert You :3',
        found: false,
      },
      clip: {
        name: 'c\'est clipé',
        description: 'Never Gonna Give You Up. Never Gonna Let You Down, Never gonna run Around, And Desert You :3',
        found: false,
      },
    }
  };

  if (storedDataVersions !== version) {
    versionInegual = true;
    localStorage.setItem('easterEggData', JSON.stringify(updatedData));
    localStorage.setItem('DataVersions', version);
  }

  const [data, setData] = useState(versionInegual ? updatedData : JSON.parse(storedData));

  useEffect(() => {
    localStorage.setItem('easterEggData', JSON.stringify(data));
  }, [data]);

  // if (!data) {
  //   return null; // or you can render a loading state or a default message
  // }

  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <EasterEggPopup foundName={foundName} data={data} />
      <Routes>
        <Route
          path='/'
          exact
          element={
            <Home data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route
          path='/Projets/Anglais'
          exact
          element={
            <Anglais data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route
          path='/Projets/Romance'
          exact
          element={
            <Romance data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route
          path='/Projets/Dualite'
          exact
          element={
            <Dualite data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route
          path='/Easter_egg'
          exact
          element={
            <EasterEgg data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route
          path='/Soutiens'
          exact
          element={
            <Soutiens data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route
          path='/Contact'
          exact
          element={
            <Contact data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;