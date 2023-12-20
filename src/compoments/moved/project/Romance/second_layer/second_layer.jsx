import img1 from './Assets/img3.jpg'
import img2 from './Assets/img4.avif'

function second_layer() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={img1} alt="" />
        <p>C'est un projet pour l'instant en état d'embryon. On compte faire une romance humouristique .</p>
      </div>
      <div className="info reverse">
        <img src={img2} alt="" />
        <p>Vous l'aurez remarqué avec ces textes trés court, on ne sait encore que peu de chose sur ce qu'on va pouvoir faire avec ce film</p>
      </div>
    </div>
  );
}


export default second_layer;