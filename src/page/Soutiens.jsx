import HeaderCompongnement from '../compoments/fixed/header/header';
// import SecondLayer from '../compoments/moved/home/second_layer/second_layer';
// import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';
import FooterCompongnement from '../compoments/fixed/footer/Footer';
import First_layer_page_soutiens from '../compoments/moved/soustiens/first_layer/First_layer';
import Second_layers_page_soutiens from '../compoments/moved/soustiens/second_layer/second_layer';

function Soutiens() {
  return (
    <div className='Soutiens'>
        {/* header */}
        <HeaderCompongnement/>
       
        <First_layer_page_soutiens />
        <Second_layers_page_soutiens />

        {/* footer */}
        <FooterCompongnement />

    </div>
  );
}


export default Soutiens;