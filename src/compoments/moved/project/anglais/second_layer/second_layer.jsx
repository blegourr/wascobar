import './second_layer.css'

import baba2 from './assets/baptiste2.jpg'


function second_layer() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={baba2} alt="" />
        <p>On suivra durant l&apos;histoire un groupe de résistants français étouffé de l&apos;occupation Allemande, mais durant cette période bien noire de l&apos;histoire, ils feront la rencontre d&apos;un étrange personnage...</p>
      </div>
      <div className="info reverse">
        <img src={baba2} alt="" />
        <p>Ce personnage changera leur cours de leur vie, ils seront amené a frôler la mort, risquer leur peau pour cette personne si mystérieuse !</p>
      </div>
    </div>
  );
}


export default second_layer;