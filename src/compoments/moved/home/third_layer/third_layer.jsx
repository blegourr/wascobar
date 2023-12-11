import './third_layer.css'
import Anglais from './assets/Anglais.jpg'
import MayoCherie from './assets/mayoCherie.jpg'

function home_third_layer() {
  return (
    <div className='home_third_layer'>
      <h1>Notre équipe</h1>
      <div className="groups revers">
        <p>hjehjhfi hfddddddd dddddd dddddd dddddddddd ddddddddd ddddddd dddddd dddddd dddd dddddddddd ddddddddddddddddddd ddddddddddddd ddddddd ddddddddddddd ddddddd dddddd dddddddd ddddddghjygdjgdyug</p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups">
        <p>hjehjhfi hfddddddd dddddd dddddd dddddddddd ddddddddd ddddddd dddddd dddddd dddd dddddddddd ddddddddddddddddddd ddddddddddddd ddddddd ddddddddddddd ddddddd dddddd dddddddd ddddddghjygdjgdyug</p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups revers">
        <p>hjehjhfi hfddddddd dddddd dddddd dddddddddd ddddddddd ddddddd dddddd dddddd dddd dddddddddd ddddddddddddddddddd ddddddddddddd ddddddd ddddddddddddd ddddddd dddddd dddddddd ddddddghjygdjgdyug</p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups">
        <p>hjehjhfi hfddddddd dddddd dddddd dddddddddd ddddddddd ddddddd dddddd dddddd dddd dddddddddd ddddddddddddddddddd ddddddddddddd ddddddd ddddddddddddd ddddddd dddddd dddddddd ddddddghjygdjgdyug</p>
        <img src={MayoCherie} alt="" />
      </div>

    </div>
  );
}


export default home_third_layer;