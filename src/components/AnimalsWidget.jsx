import { useState, useEffect, useContext } from 'react';
import DogImage from '../placeholders/dog.jpg'
import ImmagineRemove from '../media/remove.svg'
import ImmagineDettagli from "../media/dettagli.svg"
import { NavLink } from 'react-router-dom';
import { ContextId } from '../contexts/ContextProvider';
import "../css/ButtonDettagli.css";

const AnimalsWidget = ({remove}) => {
    const {id, modificaId} = useContext(ContextId)
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
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
    
      const memorizza = (ID) =>{
        setLoading(true)
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: ID,
            }),
            credentials: "include"
        };
        fetch("https://itsar-project-work-api.vercel.app/animals", requestOptions)
            .then((response) => {
            if (response.status === 200) {
                // animale eliminato
                modificaId(ID)
                setLoading(false)
            }
        });
      }

      useEffect(()=>{
        const array = animals.filter((a)=> a.id !== id)
        setAnimals(array)
      }, [id])
    
    return (
        <div style={styles.container}>
            {
                animals?.map((item) => {
                    return (
                        <div style={styles.item} key={item.id}>
                            <img src={DogImage} alt="" style={styles.image} />
                            <div style={styles.text}>
                                <h2 style={styles.h2}>{item.nome_animale}</h2>
                                <p style={styles.p}>{calculateTimePassed(item.data_di_nascita)}</p>
                            </div>
                            {remove? <img src={ImmagineRemove} style={styles.remove} width={15} height={15} onClick={() => memorizza(item.id)}/> : null}
                            {remove? null: <NavLink to={`animal/${item.id}`}><button className='buttonDettagli' id='buttonDettagli' onClick={() => memorizza(item.id)}>Dettagli</button></NavLink>}
                        </div>
                    )
                })
            }
        </div>
    );
}

const styles = {
    container: {
        minWidth: "100%",
        height: "20rem",
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        minWidth: "20rem",
        
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
        WebkitBackdropFilter: "blur(5px)",
        width: '95%'
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
    },
    dettagli:{
        position: "absolute",
        bottom: "10px",
        right: "20px" ,
        width: "20%",
        backgroundColor: "green",
        color: "white",
        borderRadius: "20px",
        padding: 5,
        fontWeight: "500",
        fontSize: "1em",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: "2px"
    },
    id:{
        color: "white"
    },
    img:{
        position: "absolute",
        right: "10px",
        bottom: "8px"
    }
}

export default AnimalsWidget;