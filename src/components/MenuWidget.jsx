import React from "react";

const MenuWidget = () => {
    return (
        <div style={styles.bottoneGenerale}>
                <button style={styles.bottoneSingolo}>HOME</button>
                <button style={styles.bottoneSingolo}>MAPPA</button>
                <button style={styles.bottoneSingolo}>ACCOUNT</button>
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
        gap:"5px"
    },
    bottoneSingolo:{
        border: "1px solid black",
        backgroundColor: "white",
        borderRadius: "100px",
        fontWeight: "bold",
        padding: "1em"
    }
}
export default MenuWidget