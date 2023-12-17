import PropTypes from 'prop-types';

import HeaderCompongnement from '../compoments/fixed/header/header';
// import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
// import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';
import First_layer_Mentions from '../compoments/moved/Mention/First_layers/First_layers';

function MentionsLegals({data, setData}) {
  return (
    <div className='MentionsLegals'>
        <HeaderCompongnement data={data} setData={setData}/>
        <First_layer_Mentions />
        <FooterCompongnement />
    </div>
  );
}

MentionsLegals.propTypes = {
  data: PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
}

export default MentionsLegals;