import HeaderCompongnement from '../compoments/fixed/header/header';
import First_layer_contact from '../compoments/moved/Contact/First_layer_contact';
// import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
// import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function Contact() {
  return (
    <div className='Contact'>
        <HeaderCompongnement/>
        <First_layer_contact />
        <FooterCompongnement />
    </div>
  );
}


export default Contact;