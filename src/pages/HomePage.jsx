import React, { useState } from 'react';
import Title from "../components/Title";
import MapWidget from "../components/MapWidget";
import PreferitiWidget from "../components/PreferitiWidget";
import AnimalsWidget from "../components/AnimalsWidget";
import PromemoriaWidget from "../components/PromemoriaWidget";
import Aggiungi from '../components/Aggiungi';
import Elimina from '../components/Elimina';
import ImmagineAdd from '../media/add.svg'
import ImmagineRemove from "../media/remove.svg"

const HomePage = () => {
  const [controllo, setControllo] = useState(false)
  const controlloValore = (valore) =>{
    setControllo(valore)
  }
  return (
    <div>
      <div style={styles.mainContainer}>
        <div style={styles.leftContainer}>
          <MapWidget  width={"100%"} height={"20vw"} borderRadius={"25px"}/>
          <PreferitiWidget style={styles.preferitiWidget}/>
        </div>
        <div style={styles.centerContainer}>
          <h1>I tuoi animali</h1>
          <AnimalsWidget remove={controllo}/>
          <div style={styles.divButton}>
            <Aggiungi descrizione={"aggiungi animale"} lunghezza={45} colore={"green"} link={"aggiungiAnimale"}/>
            <Elimina descrizione={"Elimina Animale"} lunghezza={45} colore={"red"} callback={controlloValore}/>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <PromemoriaWidget />
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "3rem"
  },
  leftContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem",
  },
  centerContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem"
  },
  divButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    flexDirection: "row"
  },
  rightContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem"
  },
  mapWidget: {
    width: "20vw",
    height: "20vw"
  },
  preferitiWidget: {
    width: "20vw"
  }
};

export default HomePage;
