import './Second_layer_contact.css';
import TrayNotif from './assets/trayNotif.jsx'
import Twitch from './assets/Twitch.svg'

function Second_layer_contact() {

  const handelClick = part => {
    if (part == 1) {
      window.open('https://www.twitch.tv/tv_wyatt')
    }
    if (part == 2) {
      window.location.href = 'mailto:contactwascobar@gmail.com?subject=Demande de contact';
    }
    if (part === 3) {
      window.open('https://discord.gg/SMJ7DxrFxY')
    }
  }


  return (
    <div className="Second_layer_contact">
      <div className="title">
        <h1>Contactez nous</h1>
      </div>
      <div className="groups">
        <div className="part" onClick={() => handelClick(1)}>
          <img src={Twitch} alt="" />
          <p>Nous sommes en live sur twitch, vous pouvez communniquer dans le tchat en partageant des idées sérieuses ou pas,Sur un projet qui vous tienne à cœur et que vous voulez exploiter.</p>
        </div>
      </div>
      <div className="groups">
        <div className="part" onClick={() => handelClick(2)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <p>Il y a également une boîte mail mis à votre disposition pour nous parler de vos idées les plus farfelues et nous aider dans nos futurs films, toute aide est la bienvenue (Cadreurs, monteurs, figurant...).</p>
        </div>
        <div className="part" onClick={() => handelClick(3)}>
          <TrayNotif />
          <p>Nous avons aussi un serveur discord que vous pouvez rejoindre tous autant que vous êtes, pour nous contacter par message ou nous appeler sur notre serveur. Que ce soit plus ou moins important nous serons à votre écoute.</p>
        </div>
      </div>
    </div>
  )
}

export default Second_layer_contact;