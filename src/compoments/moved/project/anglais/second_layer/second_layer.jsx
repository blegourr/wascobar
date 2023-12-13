import './second_layer.css'

import baba2 from './assets/baptiste2.jpg'


function second_layer() {
  return (
    <div className='second_layer_projet_anglais'>
      <div className="info">
        <img src={baba2} alt="" />
        <p>Dans ce court métrage, on suit l'histoire d'un personnage lambda, et sa chute sans fin vers une folie qui prendra le dessus de son esprit, en mettant l'accent sur la personnification de cette folie,</p>
      </div>
      <div className="info reverse">
        <p>Dans ce court métrage, on suit l'histoire d'un personnage lambda, et sa chute sans fin vers une folie qui prendra le dessus de son esprit, en mettant l'accent sur la personnification de cette folie,</p>
        <img src={baba2} alt="" />
      </div>
    </div>
  );
}


export default second_layer;