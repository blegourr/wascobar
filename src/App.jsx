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
          <Route
            path='/Projets/Anglais'
            exact
            element={
              <Anglais />
            }
          />
            <Route
            path='/Projets/Dualite'
            exact
            element={
              <Dualite />
            }
          />
            <Route
            path='/Easter_egg'
            exact
            element={
              <EasterEgg />
            }
          />
          <Route
          path='/Mentions_legal'
          exact
          element={
            <MentionsLegals />
          }
        />


           <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;