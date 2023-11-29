import { useNavigate } from 'react-router-dom';
import './header.css'


// import d'image
import Logo from './assets/logo.jpg'

function HeaderCompongnement() {
  const nav = useNavigate();

  return (
    <div className='HeaderCompongnement'>
      <div className="containertitle" > 
        <img src={Logo} alt="" onClick={() => nav("/")}/>
        <p onClick={() => nav("/")}>wascobar</p>
      </div>
      <div className="containerButton">
        <div className="button">
          <button onClick={() => nav("/")}>Accueil</button>
          <div className="belowButton"></div>
        </div>
        <div className="button">
          <button onClick={() => nav("/Projets")}>Nos projets</button>
          <div className="belowButton"></div>
        </div>
        <div className="button">
          <button onClick={() => nav("/Contact")}>Contact</button>
          <div className="belowButton"></div>
        </div>
        <div className="button">
          <button onClick={() => nav("/Soutiens")}>Nous soutenir</button>
          <div className="belowButton"></div>
        </div>
      </div>
    </div>
  );
}


export default HeaderCompongnement;