import React from 'react';
import BoxPromemoria from './BoxPromemoria';
import {AggiungiPromemoria} from './Aggiungi';
import ImmagineAggiungi from "../media/add.svg"
import ImmagineRemove from "../media/remove.svg"
import { useState, useEffect } from 'react';

const PromemoriaWidget = () => {
    const [promemoria, setPromemoria] = useState([]);
    const requestOptions = {
        credentials: 'include',
    }
    useEffect(() => {
        fetch("https://itsar-project-work-api.vercel.app/promemoria", requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            setPromemoria(result);
        })
    }, [])


    const [num, setNum] = useState(1)
    const [elimina, setElimina] = useState()

    const action = () =>{
        if(num%2==1)
        {
            setElimina(true)
        }
        else
        {
            setElimina(false)
        }
        setNum(v=> v+1)
    }

    return (
        <div style={styles.container}>
            <div style={styles.divIntestazione}>
                <h1>I tuoi Promemoria</h1> 
                <img src={ImmagineRemove} onClick={action}/>
            </div>
            {
                promemoria?.map((item) => {
                    return (
                        <BoxPromemoria key={item.id} title={item.titolo} descrizione={item.descrizione} data={item.data_ora.split('T')[0]} animale={item.animali} ora={item.data_ora.split('T')[1]} img={ImmagineRemove} aImg={10} lImg={10} remove={elimina}/>
                    )
                })
            }
            <AggiungiPromemoria descrizione={"aggiungi promemoria"} lunghezza={"80"} colore={"green"} img={ImmagineAggiungi}/>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        borderRadius: "25px",
        color: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 40
    },
    divIntestazione:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        padding: 5
    }
}

export default PromemoriaWidget;