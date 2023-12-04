import Anglais from './assets/Anglais.jpg'
import Romance from './assets/Romance.jpg'
import './second_layer.css'
function home_second_layer() {
  return (
    <div className='home_second_layer'>
      <h1 className='title'>Nos Projets</h1>
      <div className="containerCard">
        <div className="card">
          <h1>Dualité</h1>
          <img src={Romance} alt="" />
          <p>Blablab labbalbalbalb albala baal blablabl balb albabla</p>
        </div>
        <div className="card">
          <h1>Anglais</h1>
          <img src={Anglais} alt="" />
          <p>blab lablablabl albal blalbalabblab lab labla</p>
        </div>
        <div className="card">
          <h1>Romance</h1>
          <img src={Romance} alt="" />
          <p>Blab lablablab labalabla balbala bla</p>
        </div>
      </div>
    </div>
  );
}


export default home_second_layer;