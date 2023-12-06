import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Anglais from './assets/Anglais.jpg'
import Romance from './assets/Romance.jpg'
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
            <img src={Romance} alt="" />
            <p>Blablab labbalbalbalb albala baal blablabl balb albabla</p>
            <div className="bg-animate"></div>
          </div>
        </div>
        <div className="card" onClick={() => nav('/Projets/Anglais')}>
          <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
            <h1>Anglais</h1>
            <img src={Anglais} alt="" />
            <p>blab lablablabl albal blalbalabblab lab labla</p>
            <div className="bg-animate"></div>
          </div>
        </div>
        <div className="card">
          <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
            <h1>Romance</h1>
            <img src={Romance} alt="" />
            <p>Blab lablablab labalabla balbala bla</p>
            <div className="bg-animate"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomeSecondLayers;