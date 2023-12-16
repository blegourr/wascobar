import PropTypes from 'prop-types';

import HeaderCompongnement from '../../compoments/fixed/header/header'
import FirstLayer from '../../compoments/moved/project/anglais/first_layer/first_layer'
import SecondLayer from '../../compoments/moved/project/anglais/second_layer/second_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer'
function PageAnglais({data}) {
  return (
    <div className='PageAnglais'>
      <HeaderCompongnement data={data}/>
      <FirstLayer />
      <SecondLayer />
      <FooterCompongnement />
    </div>
  );
}

PageAnglais.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PageAnglais;