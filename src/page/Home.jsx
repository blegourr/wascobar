import SecondLayer from '../compoments/moved/home/second_layer/second_layer'
import ThirdLayer from '../compoments/moved/home/third_layer/third_layer';

function PageHome() {
  return (
    <div className='PageHome'>
        {/* header */}
        <SecondLayer />
        {/* Third */}
        <ThirdLayer />
        {/* footer */}
    </div>
  );
}


export default PageHome;