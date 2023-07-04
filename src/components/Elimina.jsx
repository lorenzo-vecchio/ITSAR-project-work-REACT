import React, { useState } from "react";
import "../css/Elimina.css"

const Elimina = ({descrizione, img, callback}) =>{

    const styles = {
        container:{
            borderRadius: 15,
            display: "flex",
            alignItmes: "center",
            justifyContent: "center",
            flexDirection: "row",
            padding: 2,
            cursor: 'pointer',
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
            setDescrizione("Annulla")
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
            <div className="buttonAnimali" id="buttonElimina" onClick={action}>
                <img src={img} />
                <p style={styles.paragrafo}>{Descrizione}</p>
            </div>
        )
    } 
    else 
    {
        return (
            <div className="buttonAnimali" id="buttonElimina" onClick={action}>
                <p style={styles.paragrafo}>{Descrizione}</p>
            </div>
        )
    }
}

export default Elimina; 