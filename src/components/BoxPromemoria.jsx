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
        width: "80%",
        color: "white",
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "white"
    },
    divIntestazione:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        height: "30%",
        width: "100%",
        backgroundColor: "#94092e",
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#94092e",
        borderWidth: 1,
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
        color: "black",
        maxHeight: "70%",
        width: "100%",
    }

}

export default BoxPromemoria;