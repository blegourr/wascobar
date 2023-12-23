import './third_layer.css'

// import img1 from './assets/img1.jpg'
// import img2 from './assets/img2.jpg'
import need from './assets/need2.jpeg'


function third_layer() {
  return (
    <div className='third_layer_projet_Film'>
        <h1>Rejoinez Nous</h1>
        <img src={need} alt="" />
        <p>Mais attendez on dirait bien que nous avons besoin de vous pour pouvoir réaliser ce project, c&apos;est pour cela que nous vous proposerons de{' '}
          <a href="https://forms.gle/h9ApY3nV1oowVV7r6" target="_blank" rel="noopener noreferrer">
            nous rejoindre
          </a>{' '}
          dans cette folle aventure en réalisant 
          {' '}
          <a href="https://forms.gle/h9ApY3nV1oowVV7r6" target="_blank" rel="noopener noreferrer">
          le casting, les phases de recrutement.
          </a>{''}</p>
      </div>
  );
}


export default third_layer;