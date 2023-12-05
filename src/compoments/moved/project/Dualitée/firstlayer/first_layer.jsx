// import css
import './firstLayer.css'


// import img
import oscar from './assets/newpp.png'

function first_layer_project_anglais() {
  return (
    <div className='first_layer_project_anglais'>
      <div className='container'>
        <div className="titre">
          <h1>Proposé par Oscar</h1>
        </div>
        <div className="desc">
          <img src={oscar} alt="" />
          <p>blablablablablabla blalablablablablablablablab lablablablzab lazblablablablablablabla blablablablablabl alablabla blablablablablab lablablablzablazblablab lablablablablablablab lablablablalablablabla blablabl ablablablab lablzablazblablablablablabl ablablab lablablablablalablablabla blablablab lablablablabl zablazblab labl ablabl</p>
        </div>
      </div>
    </div>
  );
}


export default first_layer_project_anglais;