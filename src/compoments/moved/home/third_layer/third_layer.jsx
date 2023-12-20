import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './third_layer.css'

import Baptiste from './assets/bap.webp'
import MayoCherie from './assets/mayoCherie.webp';
import Watt from './assets/watt.jpg';
import Oscar from './assets/oscar.jpg';
import Clip from './assets/clip.mp3'

function Home_third_layer({ data, setData, setFoundName }) {
  const [logoClickCount, setLogoClickCount] = useState(0);
  const logoRef = useRef(null);

  const handleLogoClick = () => {
    setLogoClickCount((prevCount) => prevCount + 1);
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
    if (!data.easterEgg.clip.found && logoClickCount >= 10) {
      setData(prevData => {
        const newData = { ...prevData };
        newData.easterEgg.clip.found = true;
        return newData;
      });
      setFoundName('clip')
    }

    if (logoClickCount >= 10) {
      setLogoClickCount(0);
      let audio = new Audio(Clip);
      audio.play();
    }
  }, [logoClickCount, setData, setFoundName, data.easterEgg.clip]);

  return (
    <div className='home_third_layer'>
      <h1>Notre équipe</h1>
      <div className="groups revers" onClick={handleLogoClick}>
        <p>Wyatt est le moteur de ce projet, actuellement étudiant en audiovisuel, il a choisit de s&apos;éxercer dans le dur pour faire ce qu&apos;il aime avec ses potes.</p>
        <img src={Watt} alt="" />
      </div>
      <div className="groups">
        <p>Baptiste c&apos;est le deuxième moteur du projet. C&apos;est celui qui a écrit en entier son film d&apos;action de A à Z avec l&apos;aide de Wyatt, et aussi le créateur de ce site internet </p>
        <img src={Baptiste} alt="" />
      </div>
      <div className="groups revers">
        <p>Oscar c&apos;est le compositeur de musique sur tout les projets, il est aussi gros fan de métal et adore créer de la musique. C&apos;est ausi le créateur du projet Dualitée !</p>
        <img src={Oscar} alt="" />
      </div>
      <div className="groups">
        <p>Maxence aussi appelé plus communément Mayo, c&apos;est celui qui prendra en image tout nos cours métrage et faire briller l&apos;image comme il sait bien le faire.</p>
        <img src={MayoCherie} alt="" />
      </div>

    </div>
  );
}

Home_third_layer.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setFoundName: PropTypes.func.isRequired,
}

export default Home_third_layer;