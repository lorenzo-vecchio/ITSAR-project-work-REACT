import React from 'react';

const PromemoriaWidget = () => {
    return (
        <div style={styles.container}>
            <h1>Ricordati!!!</h1>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        borderRadius: "25px",
        color: "white",
    }
}

export default PromemoriaWidget;