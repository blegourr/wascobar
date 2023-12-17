import './second_layer.css'

import baba2 from './assets/baptiste2.jpg'


function second_layer() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={baba2} alt="" />
        <p>Dans ce court métrage, on suit l&apos;histoire d&apos;un personnage lambda, et sa chute sans fin vers une folie qui prendra le dessus de son esprit, en mettant l&apos;accent sur la personnification de cette folie,</p>
      </div>
      <div className="info reverse">
        <img src={baba2} alt="" />
        <p>Dans ce court métrage, on suit l&apos;histoire d&apos;un personnage lambda, et sa chute sans fin vers une folie qui prendra le dessus de son esprit, en mettant l&apos;accent sur la personnification de cette folie,</p>
      </div>
    </div>
  );
}


export default second_layer;