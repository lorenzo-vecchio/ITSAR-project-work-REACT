import React from "react";

const FotoWidget = (props) =>{
    return (
        <div>
<<<<<<< HEAD
            <img style={styles.immagine} src={props.image} alt=""/>
=======
            <img style={styles.immagine} src={props.image} />
>>>>>>> master
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