import HeaderCompongnement from '../compoments/fixed/header/header';
import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function PageHome() {
  return (
    <div className='PageHome'>
        <HeaderCompongnement/>
        {/* header */}
        <SecondLayer />
        {/* Third */}
        <ThirdLayer />
        {/* footer */}
        <FooterCompongnement />

    </div>
  );
}


export default PageHome;