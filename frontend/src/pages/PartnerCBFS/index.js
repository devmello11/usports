import React, { useEffect, useState } from "react";

import ReactImageMagnify from "react-image-magnify";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

import degrade from '../../assets/CBFS_degradê-19.png';
import logoCBFS from '../../assets/CBFS_logo-07.png';

import bgAmarelinha from '../../assets/CBFS_AMARELINHA_5.jpg';
import amarelinha from '../../assets/CBFS_AMARELINHA.png';
import bgCamiseta from '../../assets/CBFS_CAMISETA_2.jpg';
import camiseta from '../../assets/CBFS_CAMISETA.png';
import bgGolaPolo from '../../assets/CBFS_GOLA_POLO_1.jpg';
import golaPolo from '../../assets/CBFS_GOLA_POLO.png';
import bgCalca from '../../assets/CBFS_CALÇA_3.jpg';
import calcaTactel from '../../assets/CBFS_CALÇA_TACTEL.png';
import bgCasaco from '../../assets/CBFS_CASACO_4.jpg';
import casaco from '../../assets/CBFS_CASACO.png';
import bgCortaVento from '../../assets/CBFS_CORTA_VENTO_4.jpg';
import cortaVento from '../../assets/CBFS_CORTA_VENTO.png';

import '../../styles/partnerCBFS.css';

export default function PartnerCBFS(){

  const [currentOutfit, setCurrentOutfit] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const backgroundImages = [bgAmarelinha, bgCamiseta, bgGolaPolo, bgCalca, bgCasaco, bgCortaVento];

  const currentOutfitImage = [
    { src: amarelinha,  name: 'Amarelinha' },
    { src: camiseta,    name: 'Camiseta' },
    { src: golaPolo,    name: 'gola Polo' },
    { src: calcaTactel, name: 'Calca Tactel' },
    { src: casaco,      name: 'Casaco' },
    { src: cortaVento,  name: 'Corta Vento' }
  ];

  const sliderOutfit = `translateX(-${(currentOutfit - 1) * 100}vw)`;

  useEffect(() => {
    backgroundImages.forEach((bg) => { const img = new Image(); img.src = bg; });
    currentOutfitImage.forEach((o) => { const img = new Image(); img.src = o.src; });
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function showPreviousOutfit(){
    if (currentOutfit === 1) {
      setCurrentOutfit(currentOutfitImage.length);
    } else {
      setCurrentOutfit(currentOutfit - 1);
    }
  }

  function showNextOutfit(){
    if (currentOutfit === currentOutfitImage.length) {
      setCurrentOutfit(1);
    } else {
      setCurrentOutfit(currentOutfit + 1);
    }
  }

  const isMobile = windowWidth <= 850;

  const currentBackground = {
    backgroundImage: `url(${backgroundImages[currentOutfit - 1]})`,
    backgroundSize : 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw'
  };

  return(
    <section className="cbfs-container-base">
      <div className="cbfs-container" style={currentBackground}>

        <main className="user-view">

          <div className="logo-container">
            <img src={logoCBFS} id='logoCBFS' />
          </div>

          <div className="outfit-view-container">

            <span className="material-symbols-outlined arrow-outfit-left" onClick={showPreviousOutfit}>arrow_left</span>

            <div className="outfit-view-slider" style={{transform: sliderOutfit}}>

              {currentOutfitImage.map((outfit, index) => (
                <div className="outfit-slide" id={`slide-${index + 1}`} key={index}>

                {!isMobile ? (
                  <ReactImageMagnify 
                    {...{
                      smallImage: {
                        alt: `UNIFORME cbfs - ${outfit.name}`,
                        src: outfit.src,
                        width: 300,
                        height: 300,
                        id: 'outfit-image-small'
                      },
                      largeImage: {
                        src: outfit.src,
                        width: 1000,
                        height: 1000
                      },
                      enlargedImageContainerDimensions: {
                        width: 300,
                        height: 300
                      },
                      enlargedImagePosition: 'beside',
                      isHintEnabled: false,
                      shouldHideHintForTouchDevices: true,
                      fadeDurationInMs: 250,
                      hoverDelayInMs: 0,
                      lensStyle: { backgroundColor: 'rgba(0, 0, 0, 0.58)' },
                      containerStyle: { zIndex: 10, position: 'relative' },
                      className: 'outfit-magnify-container'
                    }}
                  />
                ) : (
                  <div className="mobile-outfit">
                    <InnerImageZoom 
                      src={outfit.src}
                      zoomSrc={outfit.src}
                      zoomScale={0.3}
                      hideHint={true}
                      width={300}
                      moveType="drag"
                    />
                    <div className="zoom-hint">
                      <span className="material-symbols-outlined" id="zoom-icon">zoom_in</span>
                      <p id="product-img-click">Clique e arraste a imagem</p>
                    </div>
                  </div>
                )}

                  <h2 className="outfit-name">{outfit.name}</h2>
                </div>
              ))}
            </div>

            <span className="material-symbols-outlined arrow-outfit-right" onClick={showNextOutfit}>arrow_right</span>
          </div>

        </main>

        <div className="background-degrade-container">
          <img src={degrade} id='bg' />
        </div>

      </div>
    </section>
  );
}