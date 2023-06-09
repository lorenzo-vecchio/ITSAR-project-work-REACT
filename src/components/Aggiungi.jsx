import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "../css/AggiungiPromemoria.css"
import "../css/Elimina.css"

export const AggiungiAnimale = ({descrizione, img}) =>{

    const styles = {
        container:{
            borderRadius: 15,
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

        },
    }
    
    if (img) 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/animale"}>
                <div className="buttonAnimali" id="buttonAggiungiAnimale">
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
                <div className="buttonAnimali" id="buttonAggiungiAnimale">
                    <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
        )
    }
}

export const AggiungiPromemoria = ({descrizione, img}) =>{

    const styles = {
        container:{
            borderRadius: 15,
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
        },
    }
    
    if (img) 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/promemoria"}>
                <div className="aggiungiProm">
                    <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
        )
    } 
    else 
    {
        return (
            <NavLink style={styles.removeLinkDefault} to={"aggiungi/promemoria"}>
                <div className="aggiungiProm">
                        <p style={styles.paragrafo}>{descrizione}</p>
                </div>
            </NavLink>
        )
    }
}

 