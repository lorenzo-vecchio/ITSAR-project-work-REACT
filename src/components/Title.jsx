import React from 'react';

const Title = (prop) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{prop.title}</h1>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "3em"
  },
  title: {
    textTransform: "uppercase"
  }
};

export default Title;
