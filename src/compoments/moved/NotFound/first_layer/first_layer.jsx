import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './first_layer.css'


function FirstLayerNotFound() {
  const nav = useNavigate();

  let Application = (function () {
    let canvas;
    let ctx;
    let imgData;
    let pix;
    let WIDTH;
    let HEIGHT;

    let init = function () {
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      canvas.width = WIDTH = 700;
      canvas.height = HEIGHT = 500;
      ctx.fillStyle = '#020010';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.fill();
      imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
      pix = imgData.data;
      setInterval(flickering, 30);
    };

    let baseColor = [2, 0, 16]; // Couleur de base #020010

    let flickering = function () {
      for (let i = 0; i < pix.length; i += 4) {
        let delta = 20; // Ajustez cette valeur selon votre préférence

        let color = baseColor.map(component => {
          return Math.max(0, Math.min(255, component + (Math.random() * delta * 2 - delta)));
        });

        pix[i] = color[0];
        pix[i + 1] = color[1];
        pix[i + 2] = color[2];
      }
      ctx.putImageData(imgData, 0, 0);
    };


    return {
      init: init
    };
  }());

  useEffect(() => {
    Application.init();
  }, [Application])

  return (
    <div className="first_layer_404">
      <div className="element">
        <h1>404</h1>
        <p>On dirait bien que ce film n&apos;existe pas</p>
        <button onClick={() => nav("/")}>Retour à l&apos;accueil</button>
      </div>
      <div className="scanline"></div>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default FirstLayerNotFound;