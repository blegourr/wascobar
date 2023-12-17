import PropTypes from 'prop-types';

import HeaderCompongnement from '../compoments/fixed/header/header';
import FirstLayerEasterEgg from '../compoments/moved/EasterEgg/first_layer/First_layers';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function EasterEgg({data, setData}) {
  return (
    <div className='EasterEgg'>
        <HeaderCompongnement data={data} setData={setData}/>
        <FirstLayerEasterEgg data={data}/>
        <FooterCompongnement />
    </div>
  );
}

EasterEgg.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
}

export default EasterEgg;