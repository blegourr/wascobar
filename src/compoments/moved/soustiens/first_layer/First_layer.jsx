import PropTypes from 'prop-types';

import './First_layer.css';

import wascobar from '../../../fixed/header/assets/logo.webp'

import audioOhhhhNonnn from './assets/ohhhhhhhhNonnnnnn.ogg'
import paypal from './assets/paypal.mp3'

function first_layer_page_soutiens({data, setData, setFoundName}) {
  const handleContextWawcobar = (event) => {
    event.preventDefault();
    let audio = new Audio(audioOhhhhNonnn);
    audio.play();

    let element = event.target
    element.classList.add('activeInversion')
    element.addEventListener("animationend", () => {
      element.classList.remove('activeInversion')
    })

    if (!data.easterEgg.ohhhhhhhhNonnnnnn.found) {
      setData(prevData => {
        const newData = { ...prevData };
        newData.easterEgg.ohhhhhhhhNonnnnnn.found = true;
        return newData;
      });
      setFoundName('ohhhhhhhhNonnnnnn')
    }
  }

  const handleClickWawcobar = (event) => {
    event.preventDefault();
    let element = event.target
    element.classList.add('active')
    element.addEventListener("animationend", () => {
      element.classList.remove('active')
    })
  }

  const handlePaypalHover = () => {
    let audio = new Audio(paypal);
    audio.play();

    if (!data.easterEgg.paypal.found) {
      setData(prevData => {
        const newData = { ...prevData };
        newData.easterEgg.paypal.found = true;
        return newData;
      });
      setFoundName('paypal')
    }
  };

  return (
    <div className="first_layer_page_soutiens">
      <div className="container">
        <div className="containerElement">
          <img
            src={wascobar}
            alt="Photo de moi dans l'uniforme des pompiers"
            onContextMenu={handleContextWawcobar}
            onClick={handleClickWawcobar}
          />
        </div>
        <div className="containerElement">
          <p>Unanimement, nous convenons que le moyen le plus efficace de nous apporter votre soutien n&apos;est pas de nous faire un <span className="paypal-hover"  onClick={() => handlePaypalHover()}>virement Paypal</span> mais de participer activement aux différentes étapes de notre projet, que ce soit en tant qu&apos;acteur, figurant, monteur, perchiste, cadreur, et bien d&apos;autres. Vous pouvez également nous rejoindre en direct sur notre chaîne Twitch ou partager vos idées et suggestions sur notre serveur Discord.</p>
        </div>
      </div>
    </div>
  )
}

first_layer_page_soutiens.propTypes = {
  data: PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
  setFoundName : PropTypes.func.isRequired,
}

export default first_layer_page_soutiens;