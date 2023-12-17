import PropTypes from 'prop-types';

import HeaderCompongnement from '../compoments/fixed/header/header';
// import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
// import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';
import First_layer_page_soutiens from '../compoments/moved/soustiens/first_layer/First_layer';
import Second_layers_page_soutiens from '../compoments/moved/soustiens/second_layer/second_layer';

function Soutiens({data, setData, setFoundName}) {
  return (
    <div className='Soutiens'>
        {/* header */}
        <HeaderCompongnement data={data} setData={setData} setFoundName={setFoundName}/>
       
        <First_layer_page_soutiens data={data} setData={setData} setFoundName={setFoundName}/>
        <Second_layers_page_soutiens />

        {/* footer */}
        <FooterCompongnement />

    </div>
  );
}

Soutiens.propTypes = {
  data: PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
  setFoundName : PropTypes.func.isRequired,
}

export default Soutiens;