// import css
import './firstLayer.css'


// import img
import baba from './assets/baptiste.jpg.jpg'

function first_layer_project_anglais() {
  return (
    <div className='first_layer_project_anglais'>
      <div className='container'>
        <div className="titre">
          <h1>Proposé par Baptiste</h1>
        </div>
        <div className="desc">
          <img src={baba} alt="" />
          <p>blablablablablabla blalablablablablablablablab lablablablzab lazblablablablablablabla blablablablablabl alablabla blablablablablab lablablablzablazblablab lablablablablablablab lablablablalablablabla blablabl ablablablab lablzablazblablablablablabl ablablab lablablablablalablablabla blablablab lablablablabl zablazblab labl ablabl</p>
        </div>
      </div>
    </div>
  );
}


export default first_layer_project_anglais;