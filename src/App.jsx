import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import css
import './App.css';

// import Page
import Home from './page/Home'
import Anglais from './page/Project/Anglais'
import NotFound from './page/NotFound';


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
            path='/projects/anglais'
            exact
            element={
              <Anglais />
            }
          />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;