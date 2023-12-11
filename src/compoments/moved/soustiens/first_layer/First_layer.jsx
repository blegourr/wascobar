import './First_layer.css'
import TrayNotif from './assets/trayNotif.jsx'

function first_layer_page_soutiens() {

  return (
    <div className="first_layer_page_soutiens">
      <div className='title'>
        <h1>Nous soutenir :</h1>
      </div>
      <div className="containerElement">
        <div>
          <div className='SubContainer'>
            <p>discord :</p>
            <p>
              Nous vous ouvrons grand les portes de{' '}
              <a href="https://discord.gg/7Gc4HsfZTA" target="_blank" rel="noopener noreferrer">
                notre serveur Discord
              </a>, une plateforme propice à nos échanges constructifs. Si vous avez un plan pour un projet, une idée qui chatouille votre créativité, ou même si vous souhaitez simplement discuter de quelque chose de plus technologiquement génial qu&apos;une cuillère, nous vous invitons à faire un{' '}
              <a href="https://discord.gg/7Gc4HsfZTA" target="_blank" rel="noopener noreferrer">
                clic dans notre direction
              </a>
              !
            </p>
          </div>
          <div className='SubContainer svg'>
            <TrayNotif />
          </div>
        </div>
        <div>
          <div className='SubContainer'>
            <p>Mail :</p>
            <p>
              Vous savez,{' '}
              <a href="mailto:contactwascobar@gmail.com" rel="noopener noreferrer">
                notre email
              </a>{' '}
              est un peu comme un super-héros, toujours prêt à sauver de nouveaux projets de l&apos;oubli ! Si vous avez un plan secret pour un projet, une folle envie de nous aider, n&apos;hésitez pas à{' '}
              <a href="mailto:contactwascobar@gmail.com" rel="noopener noreferrer">
                nous contacter
              </a>
              . Notre email est là pour transformer vos idées en un réel film, séquence après séquence.
            </p>
          </div>
          <div className='SubContainer svg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default first_layer_page_soutiens;