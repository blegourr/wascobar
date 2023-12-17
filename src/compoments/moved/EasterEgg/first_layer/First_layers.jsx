import { useEffect } from 'react'
import PropTypes from 'prop-types';

import './First_layers.css';


function FirstLayerEasterEgg({ data }) {
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

        const bgCard = element.querySelector(".background")
        bgCard.style.transform = `translateX(${(x - middelCardWidth)}px) translateY(${(y - middelCardHeight)}px)`

      })

      element.addEventListener('mouseleave', () => {
        element.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`
      })
    })
  }, [])

  return (
    <div className="first_layer_easterEgg">
      <h1>Easter Egg</h1>
      <div className="containerCards">
        {data && data.easterEgg ? (
          Object.values(data.easterEgg).map((easter, index) => (
            <div className="card" key={index}>
              <div className={`content-card ${!easter.found && 'notFound'}`}>
                <div className="content">
                  <h1>{easter.found ? easter.name : "Not found"}</h1>
                  <p>{easter.found ? easter.description : "Il semblerais que vous n'avez pas trouver cette Easter_egg"}</p>
                </div>
                <div className={`background ${!easter.found && 'notFound'}`}></div>
              </div>
            </div>
          ))
        ) : (
          'Loading'
        )}
      </div>
    </div>
  )
}

FirstLayerEasterEgg.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FirstLayerEasterEgg;