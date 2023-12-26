import PropTypes from 'prop-types';

import HeaderCompongnement from '../../compoments/fixed/header/header';
import FirstLayer from '../../compoments/moved/project/Dualitee/firstlayer/first_layer'
import SecondLayer from '../../compoments/moved/project/Dualitee/second_layer/second_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer'

import '../background/Dualite/Dualite.css'
import back from '../background/Dualite/assets/back.jpg'

function PageDualite({ data, setData, setFoundName }) {
  return (
    <div className='PageDualite'>
      <HeaderCompongnement data={data} setData={setData} setFoundName={setFoundName} />
      <FirstLayer />
      <SecondLayer />
      <FooterCompongnement />
      <div className="backgroundFixedPageDualite">
        <img src={back} alt="" />
      </div>
    </div>
    );
}


PageDualite.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setFoundName: PropTypes.func.isRequired,
}

export default PageDualite;