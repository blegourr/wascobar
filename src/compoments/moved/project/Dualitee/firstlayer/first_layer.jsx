// import img
import oscar from '../../../home/second_layer/assets/Dua.webp'

function first_layer_project_dualitee() {
  return (
    <div className='first_layer_project_Film'>
      <div className='container'>
        <div className="titre">
          <h1>Proposé par Oscar</h1>
        </div>
        <div className="desc">
          <img src={oscar} alt="" />
          <p>Dans ce projet film, on s&apos;embarque dans ce qui ressemble plus a une experimentation qu&apos;a un vrai court métrage. Il a pour but de privélégier le métaphorique, au détriment de la compréhension générale de l&apos;oeuvre</p>
        </div>
      </div>
    </div>
  );
}


export default first_layer_project_dualitee;