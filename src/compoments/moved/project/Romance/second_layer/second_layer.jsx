import img1 from './Assets/img3.webp'
import img2 from './Assets/img4.webp'

function second_layer() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={img1} alt="" />
        <p>C&apos;est un projet pour l&apos;instant en état d&apos;embryon. On compte faire une romance humouristique .</p>
      </div>
      <div className="info reverse">
        <img src={img2} alt="" />
        <p>Vous l&apos;aurez remarqué avec ces textes trés court, on ne sait encore que peu de chose sur ce qu&apos;on va pouvoir faire avec ce film</p>
      </div>
    </div>
  );
}


export default second_layer;