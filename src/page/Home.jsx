import PropTypes from 'prop-types';

import HeaderCompongnement from '../compoments/fixed/header/header';
import FirstLayer from '../compoments/moved/home/first_layers/first_layer';
import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function PageHome({data, setData}) {
  return (
    <div className='PageHome'>
        {/* header */}
        <HeaderCompongnement data={data} setData={setData}/>
        <FirstLayer />
        <SecondLayer />
        <ThirdLayer />
        {/* footer */}
        <FooterCompongnement />
    </div>
  );
}

PageHome.propTypes = {
  data: PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
}

export default PageHome;