// import css
import './first_layer.css'


// import img
import oscar from './assets/newpp.png'

function first_layer_project_dualitee() {
  return (
    <div className='first_layer_project_dualitee'>
      <div className='container'>
        <div className="titre">
          <h1>Proposé par Oscar</h1>
        </div>
        <div className="desc">
          <img src={oscar} alt="" />
          <p>Dans ce projet film, on s'embarque dans ce qui ressemble plus a une experimentation qu'a un vrai court métrage. Il a pour but de privélégier le métaphorique, au détriment de la compréhension générale de l'oeuvre</p>
        </div>
      </div>
    </div>
  );
}


export default first_layer_project_dualitee;