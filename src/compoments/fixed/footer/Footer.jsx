import { useNavigate } from 'react-router-dom';
import './Footer.css'
import Wave from './compoments/wave';


// import d'image
import Logo from '../header/assets/logo.webp'

function FooterCompongnement() {
  const nav = useNavigate();

  return (
    <div className='FooterCompongnement'>
      <Wave />
      <div className="container">
        <div className="containerlink most">
          <div className="button">
            <button onClick={() => nav("/Soutiens")}>Nous soutenir</button>
            <div className="belowButton"></div>
          </div>
          <div className='logo'>
            <img src={Logo} alt="" onClick={() => nav("/")} />
            <p onClick={() => nav("/")}>wascobar</p>
          </div>
          <div className="button">
            <button onClick={() => nav("/Contact")}>Nous contacter</button>
            <div className="belowButton"></div>
          </div>
        </div>
        <div className="containerlink less">
          <div className='logo'>
            <img src={Logo} alt="" onClick={() => nav("/")} />
            <p onClick={() => nav("/")}>wascobar</p>
          </div>
          <div className="button">
            <button onClick={() => nav("/Soutiens")}>Nous soutenir</button>
            <div className="belowButton"></div>
          </div>
          <div className="button">
            <button onClick={() => nav("/Contact")}>Nous contacter</button>
            <div className="belowButton"></div>
          </div>
        </div>
        <div className="containerlink">
          <div className="button">
            <button onClick={() => nav("/Easter_egg")}>Easter egg</button>
            <div className="belowButton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default FooterCompongnement;