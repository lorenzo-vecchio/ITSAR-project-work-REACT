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
            <h2 className="titoloPreferitiWidget">Luoghi Salvati</h2>
            <ul>
                {
                postiPreferiti.map((item) => {
                    return (
                        <li key={item.id} className="tabellaPreferitiWidget">
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
        color: "white",
        borderRadius: "25px",
        paddingBottom: "1rem",
        overflowY: "auto",
        height: "29vh",
    }
}

export default PreferitiWidget;