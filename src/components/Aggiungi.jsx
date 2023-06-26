import React, { useState } from "react";
import { NavLink} from "react-router-dom";

export const AggiungiAnimale = ({descrizione, lunghezza, colore, img}) =>{

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
        },
        removeLinkDefault: {
            textDecoration: "none",
            color: "black",
        },
    }
    
    if (img) 
    {
        return (
            <div style={styles.container}>
                <img src={img} />
                <NavLink style={styles.removeLinkDefault} to={"aggiungi/animale"}>
                    <p style={styles.paragrafo}>{descrizione}</p>
                </NavLink>
            </div>
        )
    } 
    else 
    {
        return (
            <div style={styles.container}>
                <NavLink style={styles.removeLinkDefault} to={"aggiungi/animale"}>
                    <p style={styles.paragrafo}>{descrizione}</p>
                </NavLink>
            </div>
        )
    }
}

export const AggiungiPromemoria = ({descrizione, lunghezza, colore, img}) =>{

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
        },
        removeLinkDefault: {
            textDecoration: "none",
            color: "black",
        },
    }
    
    if (img) 
    {
        return (
            <div style={styles.container}>
                <img src={img} />
                <NavLink style={styles.removeLinkDefault} to={"aggiungi/promemoria"}>
                    <p style={styles.paragrafo}>{descrizione}</p>
                </NavLink>
            </div>
        )
    } 
    else 
    {
        return (
            <div style={styles.container}>
                <NavLink style={styles.removeLinkDefault} to={"aggiungi/promemoria"}>
                    <p style={styles.paragrafo}>{descrizione}</p>
                </NavLink>
            </div>
        )
    }
}

 