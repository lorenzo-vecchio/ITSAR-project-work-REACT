import React from 'react';

const BoxPromemoria = ({title, descrizione, data, animale, ora}) =>{
    return(
        <div style={styles.contain}>
            <div style={styles.divIntestazione}>
                <p style={styles.paragrafoTitolo}>{title}</p>
                <p style={styles.paragrafoTitolo}>{data}</p>
                <p style={styles.paragrafoTitolo}>{ora}</p>
            </div>
            <div style={styles.divIContenuto}>
                <span style={styles.paragrafo}><strong>Descrizione:</strong> {descrizione}</span>
                <span style={styles.paragrafo}><strong>Animale:</strong> {animale}</span>
            </div>
        </div>
    )
}

const styles = {
    contain: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 10,
        width: "80%",
        color: "white"
    },
    divIntestazione:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "blue",
        height: "30%",
        width: "100%"
    },
    paragrafoTitolo:{
        fontWeight: "bold",
        paddingLeft: 5,
    },
    paragrafo:{
        padding: 5,
        fontSize: 10,
        textAlign: "left"
    },
    divIContenuto:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        color: "white",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        maxHeight: "70%",
        width: "100%"
    }

}

export default BoxPromemoria;