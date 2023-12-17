import { useEffect, useRef } from 'react';

// import css
import './firstLayer.css'

// import assets
import video from './assets/V1.mp4'
import logo from '../../../fixed/header/assets/logo.jpg'


function First_layer_Home() {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlayThrough = () => {
      videoElement.autoplay = true;
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
    };

    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);

    // Vérifier si la vidéo est prête à jouer
    const playPromise = videoElement.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // La vidéo a pu être lue automatiquement
        videoElement.autoplay = true;
      }).catch(error => {
        // La lecture automatique n'est pas possible, l'utilisateur doit lancer la vidéo manuellement
        console.error('La lecture automatique n\'est pas possible. Veuillez lancer la vidéo manuellement.', error);
      });
    }

    // Ajouter un gestionnaire d'événements pour détecter l'interaction de l'utilisateur
    const handleInteraction = () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);

      // Redémarrer la vidéo après l'interaction de l'utilisateur
      videoElement.play();
    };

    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className='first_layer_Home'>
      <div className="content">
        <div className="contentImg">
          <img src={logo} alt="" />
        </div>
        <div className="contentText">
          <h1>Wascobar</h1>
          <p>Wascobar est un jeunes studio de cinéma crée par de jeunes étudiants en Bretagne</p>
        </div>
      </div>
      <div className="background">
        {/* <img src="" alt="" /> */}
        <div className="cache"></div>
        <video src={video} autoPlay loop ref={videoRef}></video>
      </div>
    </div>
  );
}


export default First_layer_Home;