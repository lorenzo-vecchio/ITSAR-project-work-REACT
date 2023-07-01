import React, { useState } from 'react';
import Title from "../components/Title";
import MapWidget from "../components/MapWidget";
import PreferitiWidget from "../components/PreferitiWidget";
import AnimalsWidget from "../components/AnimalsWidget";
import PromemoriaWidget from "../components/PromemoriaWidget";
import {AggiungiAnimale} from '../components/Aggiungi';
import Elimina from '../components/Elimina';
import ImmagineAdd from '../media/add.svg'
import ImmagineRemove from "../media/remove.svg"
import "../css/HomePage.css"

const HomePage = () => {
  const [controllo, setControllo] = useState(false)
  const controlloValore = (valore) =>{
    setControllo(valore)
  }
  return (
    <div>
      <div className='mainContainer'>
        <div className='leftContainer'>
          <MapWidget  width={"100%"} height={"35vh"} borderRadius={"25px"}/>
          <PreferitiWidget className="preferitiWidget" />
        </div>
        <div className='centerContainer'>
          <h1>I tuoi animali</h1>
          <AnimalsWidget remove={controllo}/>
          <div className='divButton'>
            <AggiungiAnimale descrizione={"aggiungi animale"} lunghezza={45} colore={"green"}/>
            <Elimina descrizione={"Elimina Animale"} lunghezza={45} colore={"red"} callback={controlloValore}/>
          </div>
        </div>
        <div className='rightContainer'>
          <PromemoriaWidget />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
