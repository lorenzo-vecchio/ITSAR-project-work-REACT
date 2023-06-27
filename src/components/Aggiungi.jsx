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
            width: `${lunghezza}%`
        },
    }
    
    if (img) 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/animale"}>
                <div style={styles.container}>
                    <img src={img} />
                    <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
        )
    } 
    else 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/animale"}>
                <div style={styles.container}>
                    <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
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
            width: `${lunghezza}%`,
        },
    }
    
    if (img) 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/promemoria"}>
                <div style={styles.container}>
                    <img src={img} />
                    <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
        )
    } 
    else 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/promemoria"}>
                <div style={styles.container}>
                        <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
        )
    }
}

 