import React from 'react';
import BoxPromemoria from './BoxPromemoria';
import Aggiungi from './Aggiungi';

const PromemoriaWidget = () => {
    return (
        <div style={styles.container}>
            <h1>I tuoi Promemoria</h1>
            <BoxPromemoria title={"veterinaio"} descrizione={"devo portare il mio cane dal veterinaio"} data={"14/06/2023"} animale={"Fido"} ora={"8:30"}/>
            <BoxPromemoria title={"veterinaio"} descrizione={"devo portare il mio cane dal veterinaio"} data={"14/06/2023"} animale={"Fido"} ora={"8:30"}/>
            <BoxPromemoria title={"veterinaio"} descrizione={"devo portare il mio cane dal veterinaio"} data={"14/06/2023"} animale={"Fido"} ora={"8:30"}/>
            <Aggiungi descrizione={"aggiungi promemoria"}/>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        borderRadius: "25px",
        color: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 40
    }
}

export default PromemoriaWidget;