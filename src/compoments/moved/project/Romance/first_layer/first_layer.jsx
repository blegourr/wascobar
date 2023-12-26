import wyatt from '../../../home/second_layer/assets/Romance.jpg'

function first_layer_project_romance() {
  return (
    <div className='first_layer_project_Film'>
      <div className='container'>
        <div className="titre">
          <h1>Proposé par Wyatt</h1>
        </div>
        <div className="desc">
          <img src={wyatt} alt="" />
          <p>Ce court métrage ici est assez différent des deux autre, en effet ici on part sur une romance humouristique</p>
        </div>
      </div>
    </div>
  );
}


export default first_layer_project_romance;