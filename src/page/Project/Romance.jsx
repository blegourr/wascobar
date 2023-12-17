import PropTypes from 'prop-types';

import HeaderCompongnement from '../../compoments/fixed/header/header'
import FirstLayer from '../../compoments/moved/project/Romance/first_layer/first_layer'
import SecondLayer from '../../compoments/moved/project/Romance/second_layer/second_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer'
function PageRomance({data, setData}) {
  return (
    <div className='PageRomance'>
      <HeaderCompongnement data={data} setData={setData}/>
      <FirstLayer />
      <SecondLayer />
      <FooterCompongnement />
    </div>
  );
}

PageRomance.propTypes = {
  data: PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
}

export default PageRomance;