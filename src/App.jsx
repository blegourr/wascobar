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
// import Contact from './page/Contact';
import { useEffect, useState } from 'react';
import EasterEggPopup from './compoments/fixed/popup/EasterEgg/EasterEggPopup';

function App() {
  const storedData = localStorage.getItem('easterEggData');
  const storedDataVersions = localStorage.getItem('DataVersions');
  let versionInegual = false
  
  const [foundName, setFoundName] = useState('');
  const version = "0";
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

  return (
    <BrowserRouter>
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
        {/* <Route
          path='/Contact'
          exact
          element={
            <Contact data={data} setData={setData} />
          }
        /> */}
        <Route
          path='/Mentions_legal'
          exact
          element={
            <MentionsLegals data={data} setData={setData} setFoundName={setFoundName} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;