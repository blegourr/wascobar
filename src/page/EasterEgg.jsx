import PropTypes from 'prop-types';

import HeaderCompongnement from '../compoments/fixed/header/header';
import FirstLayerEasterEgg from '../compoments/moved/EasterEgg/first_layer/First_layers';
// import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
// import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function EasterEgg({data}) {
  return (
    <div className='EasterEgg'>
        <HeaderCompongnement data={data}/>
        <FirstLayerEasterEgg data={data}/>
        <FooterCompongnement />
    </div>
  );
}

EasterEgg.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EasterEgg;