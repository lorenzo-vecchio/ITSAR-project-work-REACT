import React from 'react';
import Title from "../components/Title";
import MapWidget from "../components/MapWidget";
import PreferitiWidget from "../components/PreferitiWidget";
import AnimalsWidget from "../components/AnimalsWidget";
import PromemoriaWidget from "../components/PromemoriaWidget";

const HomePage = () => {
  return (
    <div>
      <div style={styles.mainContainer}>
        <div style={styles.leftContainer}>
          <MapWidget  width={"100%"} height={"20vw"} borderRadius={"25px"}/>
          <PreferitiWidget style={styles.preferitiWidget}/>
        </div>
        <div style={styles.centerContainer}>
          <h1>I tuoi animali</h1>
          <AnimalsWidget />
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
