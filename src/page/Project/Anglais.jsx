import PropTypes from 'prop-types';

import HeaderCompongnement from '../../compoments/fixed/header/header';
import FirstLayer from '../../compoments/moved/project/anglais/first_layer/first_layer';
import SecondLayer from '../../compoments/moved/project/anglais/second_layer/second_layer';
import ThirdLayer from '../../compoments/moved/project/anglais/third_layer/third_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer';


import '../background/Anglais/Anglais.css'
import back from '../background/Anglais/assets/back.webp'

function PageAnglais({ data, setData, setFoundName }) {
  return (
    <div className='PageAnglais'>
      <HeaderCompongnement data={data} setData={setData} setFoundName={setFoundName} />
      <FirstLayer />
      <SecondLayer />
      <ThirdLayer />
      <FooterCompongnement />
      <div className="backgroundFixedPageAnglais">
        <img src={back} alt="" />
      </div>
    </div>
  );
}

PageAnglais.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setFoundName: PropTypes.func.isRequired,
}

export default PageAnglais;