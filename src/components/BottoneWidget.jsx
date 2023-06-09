import React from "react";

const BottoneWidget = (props) => {
    return(
        <div onClick={props.onClick}>
            <button style={styles.bottone}>{props.testo}</button>
        </div>
    )
}

const styles = {
    bottone:{
        border: "0",
        backgroundColor: "white",
        color: "black",
        height: "2.5rem",
        width: "6rem",
        borderRadius: "100px",
        fontWeight: "bold",
        fontSize: "1.01rem"
    }
}


export default BottoneWidget;