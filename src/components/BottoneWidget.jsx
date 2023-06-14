import React from "react";

const BottoneWidget = (props) => {
    return(
        <div>
            <button style={styles.bottone}>{props.testo}</button>
        </div>
    )
}

const styles = {
    bottone:{
        border: "0",
        backgroundColor: "white",
        height: "2.5rem",
        width: "6rem",
        borderRadius: "100px",
        fontWeight: "bold",
        fontSize: "1.01rem"
    }
}


export default BottoneWidget;