import './second_layer.css'

import oscar2 from './assets/oscar2.jpg'


function second_layer_page_dualitee() {
  return (
    <div className='second_layer_page_dualitee'>
      <div className="info">
        <p>Dans ce court métrage, on suit l'histoire d'un personnage lambda, et sa chute sans fin vers une folie qui prendra le dessus de son esprit, en mettant l'accent sur la personnification de cette folie.</p>
        <img src={oscar2} alt="" />
      </div>
      <div className="info">
        <img src={oscar2} alt="" />
         <p>Cette sombre poésie montrera à l'audience une image rationelle, et a une intérpretation de personnalités qu'un individu pourrait développer dans sa tête, tel un enfant s'imaginant un ami imaginaire.</p>
      </div>
    </div>
  );
}


export default second_layer_page_dualitee;