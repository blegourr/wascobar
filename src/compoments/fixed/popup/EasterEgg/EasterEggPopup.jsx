import PropTypes from 'prop-types';

import './EasterEggPopup.css'
import { useEffect, useRef } from 'react';

function EasterEggPopup({ data, foundName }) {
  const H1NameEasterEgg = useRef();
  const H1CountEasterEgg = useRef();
  const EasterEggPopupElement = useRef();

  useEffect(() => {

    if (foundName && data.easterEgg[foundName].found) {
      // Update the content of H1NameEasterEgg with the found name
      H1NameEasterEgg.current.innerText = data.easterEgg[foundName].name;

      // Calculate the total count of found Easter eggs
      const totalFound = Object.values(data.easterEgg).reduce(
        (count, easter) => (easter.found ? count + 1 : count),
        0
      );

      // Update the content of H1CountEasterEgg with the count information
      H1CountEasterEgg.current.innerText = `${totalFound} / ${Object.values(data.easterEgg).length}`;

      EasterEggPopupElement.current.classList.add('active')

      setTimeout(() => {
        EasterEggPopupElement.current.classList.remove('active')
      }, 7500)

    }
  }, [foundName, data])


  return (
    <div className='EasterEggPopup' ref={EasterEggPopupElement}>
      <div className="container">
        <div className="mesageFound message">
          <p>Bravo ! vous venez de trouver :</p>
          {/* XXX */}
          <h1 ref={H1NameEasterEgg}></h1>
        </div>
        <div className="messageCount message">
          <p>Vous en avez trouvé</p>
          {/* X / X */}
          <h1 ref={H1CountEasterEgg}></h1>
        </div>
      </div>
    </div>
  );
}

EasterEggPopup.propTypes = {
  data: PropTypes.object.isRequired,
  foundName: PropTypes.string,
}

export default EasterEggPopup;