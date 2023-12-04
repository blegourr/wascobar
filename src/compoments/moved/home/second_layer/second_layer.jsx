import Anglais from './assets/Anglais.jpg'
import Romance from './assets/Romance.jpg'
import './second_layer.css'
function home_second_layer() {
  return (
    <div className='home_second_layer'>
      <h1>Nos Projets</h1>
      <div className="containerCard">
        <div className="card">
          <h2 style="text-align: center">Dualité</h2>
          <img src={Anglais} alt="" />
          <p>Blablablabbalbalbalbalbalabaalblablablbalbalbabla</p>
        </div>
        <div className="card">
          <h2 style="text-align: center">Anglais</h2>
          <img src={Anglais} alt="" />
          <p>blablablablablalbalblalbalabblablablabla</p>
        </div>
        <div className="card">
          <h2 style="text-align: center">Romance</h2>
          <img src={Romance} alt="" />
          <p>Blablablablablabalablabalbalabla</p>
        </div>
      </div>
    </div>
  );
}


export default home_second_layer;