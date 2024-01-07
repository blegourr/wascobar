// import css
import './firstLayer.css'


// import img
import Anglais from './assets/Anglais.webp'

function first_layer_project_anglais() {
  return (
    <div className='first_layer_project_Film'>
      <div className='container'>
        <div className="titre">
          <h1>Rendez-vous à Londres</h1>
        </div>
        <div className="desc">
          <img src={Anglais} alt="" />
          <p>Voici le projet de court métrage 0 budgets le plus ambitieux des trois ! En effet on parle la d&apos;un court métrage sur la seconde guerre mondiale localisé en France durant l&apos;occupation Allemande.</p>
        </div>
      </div>
    </div>
  );
}


export default first_layer_project_anglais;