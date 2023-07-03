import React, { useEffect, useState, useContext } from 'react';
import "../css/BoxPromemoria.css";
import { ContextId } from '../contexts/ContextProvider';

const BoxPromemoria = ({title, descrizione, data, animale, ora, img, lImg, aImg, remove, id_promemoria}) =>{
    const {idPromemoria, modificaId2} = useContext(ContextId)
    const [dataItaliano, setDataItaliano] = useState()

    useEffect(()=>{
        const dataInglese = new Date(data)
        const anno = dataInglese.getFullYear();
        if(anno !== 2023)
        {
            const opzioni = { day: 'numeric', month: 'long', year: 'numeric' };
            const nuovaData = new Intl.DateTimeFormat('it-IT', opzioni).format(dataInglese);
            setDataItaliano(nuovaData)
        }
        else
        {
            const opzioni = { day: 'numeric', month: 'long'};
            const nuovaData = new Intl.DateTimeFormat('it-IT', opzioni).format(dataInglese);
            setDataItaliano(nuovaData)
        }
    },[])

    return(
        <div className='boxProm'>
            <div className='barraTitolo'>
                <p className='tdoProm'>{dataItaliano}</p>
                <p className='tdoProm'>{ora}</p>
                {remove? <img src={img} width={lImg} height={aImg} id="binProm" onClick={() => modificaId2(id_promemoria)}/>: null}
            </div>
            <span className='spazioRiga'></span>
            <span className='paragDescProm' id='firstLine'><strong>{animale}</strong></span>
            <span className='spazioRiga'></span>
            <span className='paragDescProm' id='secondLine'>{descrizione}</span>
        </div>
    )
}

export default BoxPromemoria;