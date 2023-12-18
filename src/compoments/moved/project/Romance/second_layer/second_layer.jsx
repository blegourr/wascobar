import watt2 from './Assets/watt2.jpeg'

function second_layer() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={watt2} alt="" />
        <p>C'est un projet pour l'instant en état d'embryon. On compte faire une romance humouristique .</p>
      </div>
      <div className="info reverse">
        <img src={watt2} alt="" />
        <p>Vous l'aurez remarqué avec ces textes trés court, on ne sait encore que peu de chose sur ce qu'on va pouvoir faire avec ce film</p>
      </div>
    </div>
  );
}


export default second_layer;