import HeaderCompongnement from '../compoments/fixed/header/header';
import FirstLayerEasterEgg from '../compoments/moved/EasterEgg/first_layer/First_layers';
// import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
// import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';

function EasterEgg() {
  return (
    <div className='EasterEgg'>
        <HeaderCompongnement/>
        <FirstLayerEasterEgg />
        <FooterCompongnement />
    </div>
  );
}


export default EasterEgg;