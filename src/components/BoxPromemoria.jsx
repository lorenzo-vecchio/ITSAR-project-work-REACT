import React from 'react';
import "../css/BoxPromemoria.css";

const BoxPromemoria = ({title, descrizione, data, animale, ora, img, lImg, aImg}) =>{
    return(
        <div className='boxProm'>
            <div className='barraTitolo'>
                <p className='tdoProm'>{title}</p>
                <p className='tdoProm'>{data}</p>
                <p className='tdoProm'>{ora}</p>
                <img src={img} width={lImg} height={aImg}/>
            </div>
            <div className='descrizioneProm'>
                <span className='paragDescProm'><strong>Descrizione:</strong> {descrizione}</span>
                <span className='paragDescProm'><strong>Animale:</strong> {animale}</span>
            </div>
        </div>
    )
}

export default BoxPromemoria;