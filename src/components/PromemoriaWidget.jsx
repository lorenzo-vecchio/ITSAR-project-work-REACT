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

    useEffect(()=>{
        const array = promemoria.filter((p)=> p.id !== idPromemoria)
        setPromemoria(array)
      }, [idPromemoria])

    return (
        <div className='superContainerProm'>
            <div className='containerProm'>
                {num%2==1?<div className='titoloProm'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="lucide lucide-trash-2"
                        id="cancella"
                        onClick={action}
                    >
                        <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
                    </svg>
                    <h2 id='titoloPromTesto'>Promemoria</h2> 
                </div>:
                <div className='titoloProm'>
                    <img src={ImmagineTornaIndietro} width={13} height={13} onClick={action}/>
                    <h2 id='titoloPromTesto'>Promemoria</h2> 
                </div>}
                {
                    promemoria?.map((item) => {
                        return (
                            <BoxPromemoria key={item.id} title={item.titolo} descrizione={item.descrizione} data={item.data_ora.split('T')[0]} animale={item.animali} ora={item.data_ora.split('T')[1]} img={ImmagineRemove} aImg={10} lImg={10} remove={elimina} id_promemoria={item.id}/>
                        )
                    })
                }
                {console.log(idPromemoria)}
            </div>
            <AggiungiPromemoria descrizione={"Aggiungi Promemoria"} lunghezza={"80"} colore={"green"} img={ImmagineAggiungi}/>
        </div>

    );
}

export default PromemoriaWidget;