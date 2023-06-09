import { useState, useEffect } from 'react';
import DogImage from '../placeholders/dog.jpg'

const AnimalsWidget = () => {
    const [animals, setAnimals] = useState();
    const requestOptions = {
        credentials: 'include',
    }
    useEffect(() => {
        fetch("http://127.0.0.1:5000/animals", requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            setAnimals(result);
        })
    }, [])
    
    return (
        <div style={styles.container}>
            {
                animals?.map((item) => {
                    return (
                        <div style={styles.item}>
                            <img src={DogImage} alt="" style={styles.image} />
                            <div style={styles.text}>
                                <h2 style={styles.h2}>{item.nomeAnimale}</h2>
                                <p style={styles.p}>{item.data_di_nascita}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem"
    },
    item: {
        display: "flex",
        flexDirection: "row",
        padding: "0.5rem",
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        borderRadius: "20px",
        gap: "0.5rem"
    },
    image: {
        height: "5rem",
        width: "5rem",
        objectFit: "cover",
        borderRadius: "15px",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center"
    },
    h2: {
        color: "white",
        margin: 0
    },
    p: {
        margin: 0,
        color: "rgb(158, 158, 158)",
    }
}

export default AnimalsWidget;