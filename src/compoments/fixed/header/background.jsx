import { useEffect } from "react";
import PropTypes from 'prop-types';
import './background.css'

const Background = ({ active }) => {
  useEffect(() => {
    const particlesContainer = document.querySelector('.particlesContainer');

    for (let i = 0; i < 200; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const width = Math.random() * 15 + 10;
      const speed = Math.random() * 20 + 20;
      const delay = Math.random() * 0.1;
      const anims = ['float', 'floatReverse', 'float2', 'floatReverse2'];
      const anim = anims[Math.floor(Math.random() * anims.length)];

      particle.style.width = `${width}px`;
      particle.style.height = `${width}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.background = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)';
      particle.style.animation = `${anim} ${speed}s infinite alternate`;
      particle.style.animationDelay = `${delay}s`;

      particlesContainer.appendChild(particle);
    }
  }, []);

  return <div className={`particlesContainerBackground ${active >= 10 && 'active'}`}>
    <div className="linearBackground"></div>
    <div className="particlesContainer"></div>
  </div>;
};

Background.propTypes = {
  active: PropTypes.bool,
};

export default Background;