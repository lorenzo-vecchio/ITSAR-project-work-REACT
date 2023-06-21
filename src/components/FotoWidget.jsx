import React from "react";

const FotoWidget = (props) =>{
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <img style={styles.immagine} src={props.image} alt=""/>
=======
            <img style={styles.immagine} src={props.image} />
>>>>>>> master
=======
            <img style={styles.immagine} src={props.image} alt=""/>
>>>>>>> b2aca668513959c87b48dd0b0eded9f7102fb456
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