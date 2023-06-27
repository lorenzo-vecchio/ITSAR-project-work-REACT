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

    const calculateTimePassed = (date) => {
        const birthDate = new Date(date);
        const currentDate = new Date();
    
        const timeDifference = currentDate.getTime() - birthDate.getTime();
    
        // Convert time difference to years, months, and days
        const yearsPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
        const monthsPassed = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 12);
        const daysPassed = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 30);
    
        let result = '';
    
        if (yearsPassed > 0) {
          result += `${yearsPassed} ${yearsPassed === 1 ? 'year' : 'years'}`;
        }
        if (monthsPassed > 0) {
          result += `${result ? ', ' : ''}${monthsPassed} ${monthsPassed === 1 ? 'month' : 'months'}`;
        }
        if (monthsPassed <= 0) {
            result += `${result ? ', ' : ''}${daysPassed} ${daysPassed === 1 ? 'day' : 'days'}`;
        }
        return result;
      };
    
    
    return (
        <div style={styles.container}>
            {
                animals?.map((item) => {
                    console.log(item.nome_animale)
                    return (
                        <div style={styles.item} key={item.id}>
                            <img src={DogImage} alt="" style={styles.image} />
                            <div style={styles.text}>
                                <h2 style={styles.h2}>{item.nome_animale}</h2>
                                <p style={styles.p}>{calculateTimePassed(item.data_di_nascita)}</p>
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
        position: "relative",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)"
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