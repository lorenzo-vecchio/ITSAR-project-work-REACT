import React from "react";
import ImmagineAggiungi from "../media/add.svg"

const Aggiungi = ({descrizione}) =>{
    return(
        <div style={styles.container}>
            <img src={ImmagineAggiungi} />
            <p style={styles.paragrafo}>{descrizione}</p>
        </div>
    );
}

const styles = {
    container:{
        borderRadius: 15,
        backgroundColor: "green",
        display: "flex",
        alignItmes: "center",
        justifyContent: "center",
        width: "80%",
        flexDirection: "row",
        padding: 2
    },
    paragrafo:{
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        paddingLeft: 10
    }
}

export default Aggiungi; 