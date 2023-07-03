import React from 'react';
import BoxPromemoria from './BoxPromemoria';
import {AggiungiPromemoria} from './Aggiungi';
import ImmagineAggiungi from "../media/add.svg"
import ImmagineRemove from "../media/remove.svg"
import ImmagineTornaIndietro from "../media/torna_indietro.svg"
import { useState, useEffect, useContext } from 'react';
import "../css/PromemoriaWidget.css"
import "../media/add.svg"
import { ContextId } from '../contexts/ContextProvider';

const PromemoriaWidget = () => {
    const {idPromemoria, modificaId2} = useContext(ContextId)
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
    const [src, setSrc] = useState(ImmagineRemove)

    const action = () =>{
        if(num%2==1)
        {
            setElimina(true)
            setSrc(ImmagineTornaIndietro)
        }
        else
        {
            setElimina(false)
            setSrc(ImmagineRemove)
        }
        setNum(v=> v+1)
    }

    return (
        <div class='superContainerProm'>
            <div className='containerProm'>
                <div className='titoloProm'>
                    <h2 id='titoloPromTesto'>Promemoria</h2> 
                    <img src={src} onClick={action} width={13} height={13} id="cancella"/>
                </div>
                {
                    promemoria?.map((item) => {
                        return (
                            <BoxPromemoria key={item.id} title={item.titolo} descrizione={item.descrizione} data={item.data_ora.split('T')[0]} animale={item.animali} ora={item.data_ora.split('T')[1]} img={ImmagineRemove} aImg={10} lImg={10} remove={elimina} id_promemoria={idPromemoria}/>
                        )
                    })
                }
            </div>
            <AggiungiPromemoria descrizione={"Aggiungi Promemoria"} lunghezza={"80"} colore={"green"} img={ImmagineAggiungi}/>
        </div>

    );
}

export default PromemoriaWidget;