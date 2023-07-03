import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../css/MenuWidget.css"

const MenuWidget = () => {
    return (
        <div className="bottoneGenerale">
            <NavLink to="/" style={style.removeLinkDefault}>
                <button className="bottone-singolo">
                    HOME
                </button>
            </NavLink>
            
            <NavLink to="/mappa" style={style.removeLinkDefault}>
                <button className="bottone-singolo">
                    MAPPA
                </button>
            </NavLink>
            <NavLink to="/account" style={style.removeLinkDefault}>
                <button className="bottone-singolo">
                    ACCOUNT
                </button>
            </NavLink>

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