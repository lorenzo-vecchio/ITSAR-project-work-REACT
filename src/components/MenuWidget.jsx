import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const MenuWidget = () => {
    return (
        <div style={styles.bottoneGenerale}>
                <button style={styles.bottoneSingolo}><NavLink to="/" style={styles.removeLinkDefault}>HOME</NavLink></button>
                <button style={styles.bottoneSingolo}><NavLink to="/mappa" style={styles.removeLinkDefault}>MAPPA</NavLink></button>
                <button style={styles.bottoneSingolo}><NavLink to="/account" style={styles.removeLinkDefault}>ACCOUNT</NavLink></button>
        </div>
    )
}

const styles = {
    bottoneGenerale:{
        border: "0",
        backgroundColor: "white",
        borderRadius: "100px",
        fontWeight: "bold",
        width: "fit-content",
        padding: "0.4em",
        display: "flex",
        marginLeft: "10px",
        gap:"5px",
        position: 'fixed',
        left: '15px',
        bottom: '15px',
        zIndex: 2000000
    },
    bottoneSingolo:{
        border: "1px solid black",
        backgroundColor: "white",
        borderRadius: "100px",
        fontWeight: "bold",
        padding: "1em"
    },
    removeLinkDefault: {
      textDecoration: "none",
      color: "black",
    },
}
export default MenuWidget