import React from 'react';
import sfondo from "../media/sfondo.jpg";

const Background = () => {
  return <img src={sfondo} alt="sfondo" style={style} />;
};

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: -1000000
};

export default Background;
