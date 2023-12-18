import './First_layer_contact.css';

import Youtube from './assets/Youtube.svg'
import Twitch from './assets/Twitch.svg'

function first_layer_contact() {
  return (
    <div className="First_layer_contact">
      <h1>Contactez nous</h1>
      <div className="groups first">
        <img src={Youtube} alt="" />
        <p>fuffize zdzdzdzdzdzdz dzdzdzdhf</p>
      </div>
      <div>
      <div className="groups second">
        <img src={Twitch} alt="" />
        <p>hudzih zdzdzdzdzd dzdzdzdzdzdzdz dzddz</p>
        </div>
      <div className="groups third">
        <p>duzss sssssss sssidzbni</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
      </div>      
      </div>
    </div>
  )
}

export default first_layer_contact;