import './third_layer.css'
import Anglais from './assets/Anglais.jpg'
import MayoCherie from './assets/mayoCherie.jpg'

function home_third_layer() {
  return (
    <div className='home_third_layer'>
      <h1>Notre équipe</h1>
      <div className="groups revers">
        <p>Wyatt est le moteur de ce projet, actuellement étudiant en audiovisuel, il a choisit de s'éxercer dans le dur pour faire ce qu'il aime avec ses potes.</p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups">
        <p>Baptiste c'est le deuxième moteur du projet. C'est celui qui a écrit en entier son film d'action de A à Z avec l'aide de Wyatt, et aussi le créateur de ce site internet </p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups revers">
        <p>Oscar c'est le compositeur de musique sur tout les projets, il est aussi gros fan de métal et adore créer de la musique. C'est ausi le créateur du projet Dualitée !</p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups">
        <p>Maxence aussi appelé plus communément Mayo, c'est celui qui prendra en image tout nos cours métrage et faire briller l'image comme il sait bien le faire.</p>
        <img src={MayoCherie} alt="" />
      </div>

    </div>
  );
}


export default home_third_layer;