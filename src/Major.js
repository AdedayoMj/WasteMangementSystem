import React, { useState, useEffect} from 'react';

import desktopImage from './images/bus1.jpg';
import mobileImage from './images/bus2.jpg';


function Major() {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  });
  return (
      
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>

            <div className="App-content">
                <h1>GoFast</h1>
                <p>Deliverying services with comfort</p>
            </div>
        </div>
       
    );

}
export default Major



