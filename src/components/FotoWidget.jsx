import React from "react";

const FotoWidget = (props) =>{
    return (
        <div>
            <img style={styles.immagine} src={props.image} alt=""/>
            <img style={styles.immagine} src={props.image} />
            <img style={styles.immagine} src={props.image} alt=""/>
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