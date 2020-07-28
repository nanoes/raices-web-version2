import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./data/comedores.json";
import Navbar from './componentes/NavBar';
import Slider from './componentes/Slider';
import About from './componentes/About';
import ComoParticipar from './componentes/ComoParticipar';
import BotonArriba from './componentes/BotonArriba';
import NuestrosMerenderos from './componentes/NuestrosMerenderos';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';


function App() {
  const [viewport, setViewport] = useState({
    latitude: -34.686336, 
    longitude: -58.745434,
    width: "50vw",
    height: "50vh",
    zoom: 11,
    });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <>
    <Slider /> 
    <Navbar />
    <About />
    <ComoParticipar />
      <NuestrosMerenderos />
      <div id="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {parkDate.features.map(park => (
            <Marker
              key={park.properties.PARK_ID}
              latitude={park.geometry.coordinates[1]}
              longitude={park.geometry.coordinates[0]}
            >
              <button
                className="marker-btn"
                onClick={e => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              >
                <img src="/plato.svg" alt="Comedores de Merlo" />
              </button>
            </Marker>
          ))}

          {selectedPark ? (
            <Popup
              latitude={selectedPark.geometry.coordinates[1]}
              longitude={selectedPark.geometry.coordinates[0]}
              onClose={() => {
                setSelectedPark(null);
              }}
            >
              <div>
                <h2>{selectedPark.properties.NAME}</h2>
                <p>{selectedPark.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    <Contacto />
    <Footer />
   

    <BotonArriba />
    </>

  );
}

export default App;
