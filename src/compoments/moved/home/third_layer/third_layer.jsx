import './third_layer.css'
import Anglais from '../second_layer/assets/Anglais.webp'
import MayoCherie from './assets/mayoCherie.webp'
import Watt from './assets/watt.jpg'
import Oscar from './assets/oscar.jpg'

function home_third_layer() {
  return (
    <div className='home_third_layer'>
      <h1>Notre équipe</h1>
      <div className="groups revers">
        <p>Wyatt est le moteur de ce projet, actuellement étudiant en audiovisuel, il a choisit de s&apos;éxercer dans le dur pour faire ce qu&apos;il aime avec ses potes.</p>
        <img src={Watt} alt="" />
      </div>
      <div className="groups">
        <p>Baptiste c&apos;est le deuxième moteur du projet. C&apos;est celui qui a écrit en entier son film d&apos;action de A à Z avec l&apos;aide de Wyatt, et aussi le créateur de ce site internet </p>
        <img src={Anglais} alt="" />
      </div>
      <div className="groups revers">
        <p>Oscar c&apos;est le compositeur de musique sur tout les projets, il est aussi gros fan de métal et adore créer de la musique. C&apos;est ausi le créateur du projet Dualitée !</p>
        <img src={Oscar} alt="" />
      </div>
      <div className="groups">
        <p>Maxence aussi appelé plus communément Mayo, c&apos;est celui qui prendra en image tout nos cours métrage et faire briller l&apos;image comme il sait bien le faire.</p>
        <img src={MayoCherie} alt="" />
      </div>

    </div>
  );
}


export default home_third_layer;