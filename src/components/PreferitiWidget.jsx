import React from 'react';

const PreferitiWidget = (props) => {
    const preferiti = {
        posti: [
            {
                id: 1,
                nome: "ArcaPlanet",
                via: "via Carlo Imbonati, 24"
            },
            {
                id: 2,
                nome: "Negozio cani",
                via: "via Carlo Imbonati, 24"
            },
            {
                id: 3,
                nome: "Gatti life",
                via: "via Carlo Imbonati, 24"
            },
            {
                id: 4,
                nome: "ArcaPlanet",
                via: "via Carlo Imbonati, 24"
            },
        ]
    }
    
    
    return (
        <div style={{...styles.container, ...props.customCss}}>
            <h3>I tuoi posti preferiti</h3>
            <ul>
                {
                preferiti.posti.map((item) => {
                    return (
                        <li key={item.id}>
                            <p style={styles.nome}>{item.nome}</p>
                            <p style={styles.via}>{item.via}</p>
                        </li>                        
                    );
                })
            }
            </ul>
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        display: "flex",
        flexDirection: "column",
        color: "white",
        borderRadius: "25px"
    },
    nome: {
        marginBottom: 0,        
    },
    via: {
        fontSize: "0.8rem",
        margin: 0,
        color: "rgb(158, 158, 158)"
    },
}

export default PreferitiWidget;