import img1 from './assets/wascobar1.png'
import img2 from './assets/wascobar2.png'

function second_layer_page_dualitee() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={img1} alt="" />
        <p>Dans ce court métrage, on suit l&apos;histoire d&apos;un personnage lambda, et sa chute sans fin vers une folie qui prendra le dessus de son esprit, en mettant l&apos;accent sur la personnification de cette folie.</p>
      </div>
      <div className="info reverse">
        <img src={img2} alt="" />
         <p>Cette sombre poésie montrera à l&apos;audience une image rationelle, et a une interprétation de personnalités qu&apos;un individu pourrait développer dans sa tête, tel un enfant s&apos;imaginant un ami imaginaire.</p>
      </div>
    </div>
  );
}


export default second_layer_page_dualitee;