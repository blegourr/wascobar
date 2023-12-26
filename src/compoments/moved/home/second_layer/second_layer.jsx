import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Anglais from './assets/Anglais.jpeg'
import Romance from './assets/Romance.webp'
import Dua from './assets/Dua.jpg'
import './second_layer.css'

function HomeSecondLayers() {
  const nav = useNavigate();

  useEffect(() => {
    const card = document.querySelectorAll(".card")
    card.forEach(element => {
      element.addEventListener('mousemove', e => {
        let elementRect = element.getBoundingClientRect()

        let x = e.clientX - elementRect.x
        let y = e.clientY - elementRect.y

        let middelCardWidth = elementRect.width / 2
        let middelCardHeight = elementRect.height / 2

        let angleY = -(x - middelCardWidth) / 45
        let angleX = (y - middelCardHeight) / 45

        element.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`

        const bgCard = element.querySelector(".bg-animate")
        bgCard.style.transform = `translateX(${(x - middelCardWidth)}px) translateY(${(y - middelCardHeight)}px)`

      })

      element.addEventListener('mouseleave', () => {
        element.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`
      })
    })
  }, [])



  return (
    <div className='HomeSecondLayers'>
      <h1 className='title'>Nos Projets</h1>
      <div className="containerCard">
        <div className="card" onClick={() => nav("/Projets/Dualite")}>
          <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
            <h1>Dualité</h1>
            <img src={Dua} alt="" />
            <p>Dualitée est le projet de court métrage expérimental d&apos;Oscar</p>
            <div className="bg-animate"></div>
          </div>
        </div>
        <div className="card" onClick={() => nav('/Projets/Londres')}>
          <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
            <h1>Rendez-vous à Londres</h1>
            <img src={Anglais} alt="" />
            <p>Rendez-vous à Londres est pour l&apos;instant c&apos;est le court métrage d&apos;action de Baptiste</p>
            <div className="bg-animate"></div>
          </div>
        </div>
        <div className="card"  onClick={() => nav('/Projets/Romance')}>
          <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
            <h1>Romance</h1>
            <img src={Romance} alt="" />
            <p>C&apos;est un projet de court métrage Romantique/Humouristique, par Wyatt</p>
            <div className="bg-animate"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomeSecondLayers;