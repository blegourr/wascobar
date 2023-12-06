import HeaderCompongnement from '../compoments/fixed/header/header';
import FirstLayer from '../compoments/moved/home/second_layer/second_layer'
import FooterCompongnement from '../compoments/fixed/footer/Footer'

function PageHome() {
  return (
    <div className='PageHome'>
        <HeaderCompongnement/>
        {/* header */}
        <FirstLayer />
        {/* First */}
        {/* second */}
        {/* footer */}
        <FooterCompongnement />

    </div>
  );
}


export default PageHome;