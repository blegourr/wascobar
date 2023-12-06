import HeaderCompongnement from '../../compoments/fixed/header/header';
import FirstLayer from '../../compoments/moved/project/Dualitee/firstlayer/first_layer'
import SecondLayer from '../../compoments/moved/project/Dualitee/second_layer/second_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer'
function PageDualite() {
    return (
      <div className='PageDualite'>
        <HeaderCompongnement/>
        <FirstLayer />
        <SecondLayer />
        <FooterCompongnement/>

      </div>
    );
  }
  
  
  export default PageDualite;