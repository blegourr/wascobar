import Anglais from './assets/Anglais.jpg'
import Romance from './assets/Romance.jpg'
import './second_layer.css'
function home_second_layer() {
  return (
    <div className='home_second_layer'>
      <h1>Nos Projets</h1>
      <div className="containerCard">
        <div className="card">
          <h1>Dualité</h1>
          <img src={Anglais} alt="" />
          <p>Blablablabbalbalbalbalbalabaalblablablbalbalbabla</p>
        </div>
        <div className="card">
          <h1>Anglais</h1>
          <img src={Anglais} alt="" />
          <p>blablablablablalbalblalbalabblablablabla</p>
        </div>
        <div className="card">
          <h1>Romance</h1>
          <img src={Romance} alt="" />
          <p>Blablablablablabalablabalbalabla</p>
        </div>
      </div>
    </div>
  );
}


export default home_second_layer;