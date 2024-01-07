import './First_layer_contact.css';

// import img
import contact from './assets/contact.webp'

function First_layer_contact() {
  return (
    <div className="First_layer_contact">
      <div className="container">
        <div className="img">
          <img src={contact} alt="" />
        </div>
        <div className="title">
          <p>Bienvenue sur la page contact où vous pourrez nous contacter à travers différentes solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default First_layer_contact;