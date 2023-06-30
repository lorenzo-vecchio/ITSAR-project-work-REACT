import React from 'react';
import "../css/BoxPromemoria.css";

const BoxPromemoria = ({title, descrizione, data, animale, ora, img, lImg, aImg, remove}) =>{
    return(
        <div className='boxProm'>
            <div className='barraTitolo'>
                <p className='tdoProm'>{data}</p>
                <p className='tdoProm'>{ora}</p>
                {remove? <img src={img} width={lImg} height={aImg}/>: null}
            </div>
            <div className='descrizioneProm'>
            <span className='paragDescProm'><strong>Animale:</strong> {animale}</span>
                <span className='paragDescProm'><strong>Descrizione:</strong> {descrizione}</span>
            </div>
        </div>
    )
}

export default BoxPromemoria;