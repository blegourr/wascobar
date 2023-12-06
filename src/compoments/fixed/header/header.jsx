import { useNavigate } from 'react-router-dom';
import './header.css'


// import d'image
import Logo from './assets/logo.jpg'
import { useState } from 'react';

function HeaderCompongnement() {
  const nav = useNavigate();

  const [burgerActive, setBurgerActive] = useState(false);

  const toggleBurger = () => {
    setBurgerActive(!burgerActive);
  };

  const handelClickButton = (url) => {
    if (window.innerWidth < 680 && burgerActive) {
      setBurgerActive(false)
      nav(url)
    }
  };


  return (
    <div className={`HeaderCompongnement`}>
      <div className={`container ${burgerActive ? 'active' : ''}`}>
        <div className="containertitle" >
          <img src={Logo} alt="" onClick={() => nav("/")} />
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

export default HeaderCompongnement;