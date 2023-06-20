import React from "react";
import "../css/Button.css";

export const ButtonSubmit = (props) => {
    return(
        <button type="submit" className="buttonForm" id="buttonAggiungi">{props.text}</button>
    );

}

export const ButtonReset = (props) => {
    return(
        <button type="reset" className="buttonForm" id="buttonAnnulla">{props.text}</button>
    );

}





//inserire nella vostra pagina =>
//<Buttons text="testo da inserire nel bottone"/>