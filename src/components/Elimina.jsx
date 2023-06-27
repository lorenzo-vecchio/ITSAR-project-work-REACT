import React, { useState } from "react";

const Elimina = ({descrizione, lunghezza, colore, img, callback}) =>{

    const styles = {
        container:{
            borderRadius: 15,
            backgroundColor: `${colore}`,
            display: "flex",
            alignItmes: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: `${lunghezza}%`,
            padding: 2
        },
        paragrafo:{
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            paddingLeft: 10
        }
    }

    const [num, setNum] = useState(1)
    const [Descrizione, setDescrizione] = useState(descrizione)

    const action = () =>{
        if(num%2==1)
        {
            callback(true)
            setDescrizione("Torna Indietro")
        }
        else
        {
            callback(false)
            setDescrizione("Elimina Animale")
        }
        setNum(v=> v+1)
    }

    if (img) 
    {
        return (
            <div style={styles.container} onClick={action}>
                <img src={img} />
                <p style={styles.paragrafo}>{Descrizione}</p>
            </div>
        )
    } 
    else 
    {
        return (
            <div style={styles.container} onClick={action}>
                <p style={styles.paragrafo}>{Descrizione}</p>
            </div>
        )
    }
}

export default Elimina; 