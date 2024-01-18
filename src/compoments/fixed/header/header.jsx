import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.css'

// import d'image
import Logo from '../../../../public/logo.webp'

// import élément
import Background from './background';

function HeaderCompongnement({ data, setData, setFoundName }) {
  const nav = useNavigate();
  const [burgerActive, setBurgerActive] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const logoRef = useRef(null);

  const toggleBurger = () => {
    setBurgerActive(!burgerActive);
  };

  const handelClickButton = (url) => {
    if (window.innerWidth < 680 && burgerActive) {
      setBurgerActive(false)
      nav(url)
    }
  };

  const handleLogoClick = () => {
    setLogoClickCount((prevCount) => prevCount + 1);
    nav('/');
  };

  const handleOutsideClick = (event) => {
    if (logoRef.current && !logoRef.current.contains(event.target)) {
      // Click occurred outside the logo, reset the click count
      setLogoClickCount(0);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!data.easterEgg.buBul.found && logoClickCount >= 10) {
      setData(prevData => {
        const newData = { ...prevData };
        newData.easterEgg.buBul.found = true;
        return newData;
      });

      setFoundName('buBul')

    }
  }, [logoClickCount, setData, setFoundName, data.easterEgg.buBul]);



  return (
    <div className={`HeaderCompongnement`}>
      <Background active={logoClickCount >= 10} />
      <div className={`container ${burgerActive ? 'active' : ''}`}>
        <div className="containertitle" ref={logoRef}>
          <img src={Logo} alt="" onClick={handleLogoClick} />
          <p onClick={() => nav("/")}>wascobar</p>
        </div>

        {/* menuBurger */}
        <div className={`BurgerMenu ${burgerActive ? 'active' : ''}`} onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* nav */}
        <nav className={`${burgerActive ? 'active' : ''}`}>
          <ul className='containerButton'>
            <li className="button" onClick={() => { handelClickButton('/') }}>
              <button onClick={() => nav("/")}>Accueil</button>
              <div className="belowButton"></div>
            </li>
            <li className="button" onClick={() => { handelClickButton('/Contact') }}>
              <button onClick={() => nav("/Contact")}>Contact</button>
              <div className="belowButton"></div>
            </li>
            <li className="button" onClick={() => { handelClickButton('/Soutiens') }}>
              <button onClick={() => nav("/Soutiens")}>Nous soutenir</button>
              <div className="belowButton"></div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

HeaderCompongnement.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setFoundName : PropTypes.func.isRequired,
}

export default HeaderCompongnement;