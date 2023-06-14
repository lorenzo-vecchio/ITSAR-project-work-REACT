import React from "react";

const FotoWidget = (props) =>{
    return (
        <div>
            <img style={styles.immagine} src={props.image} />
        </div>
    )
}

const styles = {
    immagine:{
        width: '10rem',
        height: '10rem',
        objectFit: "cover",
        borderRadius: "25px"
    }
}

export default FotoWidget;