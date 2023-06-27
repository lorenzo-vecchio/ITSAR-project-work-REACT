import { useState, useEffect } from "react";

const PreferitiWidget = (props) => {
    const [postiPreferiti, setPostiPreferiti] = useState([])
    const requestOptions = {
        credentials: 'include',
    }
    useEffect(() => {
        fetch("https://itsar-project-work-api.vercel.app/preferiti", requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            setPostiPreferiti(result);
        })
    }, [])
    
    
    
    return (
        <div style={{...styles.container, ...props.customCss}}>
            <h3>I tuoi posti preferiti</h3>
            <ul>
                {
                postiPreferiti.map((item) => {
                    return (
                        <li key={item.id}>
                            <p style={styles.nome}>{item.nome_luogo}</p>
                            <p style={styles.via}>{item.nome_localita}</p>
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
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
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