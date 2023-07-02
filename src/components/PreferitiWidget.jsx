import { useState, useEffect } from "react";
import "../css/PreferitiWidget.css";

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
                            <p id="nomeLuogo">{item.nome_luogo}</p>
                            <p id="via" >{item.nome_localita}</p>
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
        borderRadius: "25px",
    }
}

export default PreferitiWidget;