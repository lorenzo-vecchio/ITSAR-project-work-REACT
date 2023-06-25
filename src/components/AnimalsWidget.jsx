import { useState, useEffect } from 'react';
import DogImage from '../placeholders/dog.jpg'
import ImmagineRemove from '../media/remove.svg'

const AnimalsWidget = ({remove}) => {
    const [animals, setAnimals] = useState();
    const requestOptions = {
        credentials: 'include',
    }
    useEffect(() => {
        fetch("https://itsar-project-work-api.vercel.app/animals", requestOptions)
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
                            {remove? <img src={ImmagineRemove} style={styles.remove} width={15} height={15}/>: null}
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
        gap: "0.5rem",
        position: "relative"
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
    },
    remove: {
        position: "absolute",
        top: "10px",
        right: "10px"
    }
}

export default AnimalsWidget;