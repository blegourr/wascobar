import './third_layer.css'

import need from './assets/need2.webp'


function third_layer() {
  return (
    <div className='third_layer_projet_Film'>
      <h1>Rejoinez Nous</h1>
      <img src={need} alt="" />
      <p>
        Si vous êtes passionné par l&apos;art du cinéma, nous vous invitons à <a href="https://forms.gle/h9ApY3nV1oowVV7r6" target="_blank" rel="noopener noreferrer">
          participer à cette aventure
        </a>{''}
        . Que vous soyez acteur, technicien, costumier, maquilleur, ou simplement passionné par le cinéma, votre contribution serait inestimable. Nous tenons à préciser que ce projet est à but non lucratif, et toute participation se fera bénévolement. Le tournage aura lieu cet été en Bretagne, principalement dans le Morbihan. <a href="https://docs.google.com/document/d/1V9t7lG_xOXxPR6hXiFYND5tGpIELCbhV9DBVs0Gex08/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Pour plus d&apos;information cliquer ici !</a>{''}
      </p>
    </div>
  );
}


export default third_layer;