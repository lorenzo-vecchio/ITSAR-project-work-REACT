import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../css/MenuWidget.css"

const MenuWidget = () => {
    return (
        <div className="bottoneGenerale">
            <button className="bottone-singolo">
                <NavLink to="/" style={style.removeLinkDefault}>HOME</NavLink>
            </button>
            <button className="bottone-singolo">
                <NavLink to="/mappa" style={style.removeLinkDefault}>MAPPA</NavLink>
            </button>
            <button className="bottone-singolo">
                <NavLink to="/account" style={style.removeLinkDefault}>ACCOUNT</NavLink>
            </button>
        </div> 
    );
}
export default MenuWidget

const style = {
    removeLinkDefault: {
        textDecoration: 'none',
        color: 'inherit',
    },
}