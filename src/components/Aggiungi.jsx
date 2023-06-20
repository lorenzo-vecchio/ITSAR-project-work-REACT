import React from "react";

const Aggiungi = ({descrizione, lunghezza, colore, img}) =>{

    const styles = {
        container:{
            borderRadius: 15,
            backgroundColor: `${colore}`,
            display: "flex",
            alignItmes: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: `${lunghezza}%`,
            padding: 2
        },
        paragrafo:{
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            paddingLeft: 10
        }
    }

    return(
        <div style={styles.container}>
            <img src={img} />
            <p style={styles.paragrafo}>{descrizione}</p>
        </div>
    );
}

export default Aggiungi; 