import PropTypes from 'prop-types';

import HeaderCompongnement from '../compoments/fixed/header/header';
import First_layer_contact from '../compoments/moved/Contact/first_layer/First_layer_contact';
import Second_layer_contact from '../compoments/moved/Contact/second_layer/Second_layer_contact';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function Contact({data, setData, setFoundName}) {
  return (
    <div className='Contact'>
        <HeaderCompongnement data={data} setData={setData} setFoundName={setFoundName}/>
        <First_layer_contact data={data} setData={setData} setFoundName={setFoundName}/>
        <Second_layer_contact data={data} setData={setData} setFoundName={setFoundName}/>
        <FooterCompongnement/>
    </div>
  );
}

Contact.propTypes = {
  data: PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
  setFoundName: PropTypes.func.isRequired,
}

export default Contact;