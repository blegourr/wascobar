import './second_layer.css'

import img1 from './assets/img1.webp'
import img2 from './assets/img2.webp'

function second_layer() {
  return (
    <div className='second_layer_projet_Film'>
      <div className="info">
        <img src={img1} alt="" />
        <p>Imaginez une situation tendue pendant la Seconde Guerre mondiale : des résistants français reçoivent une alerte radio signalant le crash d&apos;un avion anglais sur leur territoire. L&apos;intrigue se développe autour de leur mission pour retrouver le pilote anglais égaré, le protéger et l&apos;aider à échapper aux griffes de l&apos;ennemi. C&apos;est une histoire de solidarité, de courage et de détermination dans un contexte historique riche en émotions.</p>
      </div>
      <div className="info reverse">
        <img src={img2} alt="" />
        <p>Toute L&apos;équipe, passionnée et dévouée, s&apos;efforce de capturer l&apos;essence de cette période cruciale tout en apportant une dimension cinématographique moderne. Chaque membre, qu&apos;il s&apos;agisse de techniciens, de costumiers, de réalisateurs, de nos partenaires et bien d&apos;autres, contribue à tisser la trame d&apos;une aventure visuelle mémorable.</p>
      </div>
    </div>
  );
}


export default second_layer;