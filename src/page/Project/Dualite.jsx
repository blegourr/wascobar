import PropTypes from 'prop-types';

import HeaderCompongnement from '../../compoments/fixed/header/header';
import FirstLayer from '../../compoments/moved/project/Dualitee/firstlayer/first_layer'
import SecondLayer from '../../compoments/moved/project/Dualitee/second_layer/second_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer'
function PageDualite({data}) {
    return (
      <div className='PageDualite'>
        <HeaderCompongnement data={data}/>
        <FirstLayer />
        <SecondLayer />
        <FooterCompongnement/>

      </div>
    );
  }
  

  PageDualite.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default PageDualite;