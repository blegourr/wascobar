import HeaderCompongnement from '../../compoments/fixed/header/header'
import FirstLayer from '../../compoments/moved/project/anglais/first_layer/first_layer'
import SecondLayer from '../../compoments/moved/project/anglais/second_layer/second_layer';
import FooterCompongnement from '../../compoments/fixed/footer/Footer'
function PageAnglais() {
    return (
      <div className='PageAnglais'>
         <HeaderCompongnement/>
        <FirstLayer />
        <SecondLayer />
         <FooterCompongnement/>


      </div>
    );
  }
  
  
  export default PageAnglais;