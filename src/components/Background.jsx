import React from 'react';
import sfondo from "../media/Sfondo4.jpg";

const Background = () => {
  return <img src={sfondo} alt="sfondo" style={style} />;
};

const style = {
  width: "100vw",
  height: "120vh",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: -1000000,
};

export default Background;
