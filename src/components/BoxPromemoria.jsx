import React from 'react';
import "../css/BoxPromemoria.css";

const BoxPromemoria = ({title, descrizione, data, animale, ora, img, lImg, aImg, remove}) =>{
    return(
        <div className='boxProm'>
            <div className='barraTitolo'>
                <p className='tdoProm'>{data}</p>
                <p className='tdoProm'>{ora}</p>
                {remove? <img src={img} width={lImg} height={aImg} id="binProm"/>: null}
            </div>
            <div className='descrizioneProm'>
                <span className='paragDescProm'><strong>{animale}</strong></span>
                <span className='paragDescProm' id='secondLine'>{descrizione}</span>
            </div>
        </div>
    )
}

export default BoxPromemoria;