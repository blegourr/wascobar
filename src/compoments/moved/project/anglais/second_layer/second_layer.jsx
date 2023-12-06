import './second_layer.css'

import baba2 from './assets/baptiste2.jpg'


function second_layer() {
  return (
    <div className='second_layer_projet_anglais'>
      <div className="info">
        <img src={baba2} alt="" />
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaa aaaaa a a a a aaaaa aaa aaa aaaaa aaa aaa aaa aaaaa aaa aa aaaaaa aa  </p>
      </div>
      <div className="info">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaa aaaaa a a a a aaaaa aaa aaa aaaaa aaa aaa aaa aaaaa aaa aa aaaaaa aa</p>
        <img src={baba2} alt="" />
      </div>
    </div>
  );
}


export default second_layer;