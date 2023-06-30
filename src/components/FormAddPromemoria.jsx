import React, {useState, useEffect} from 'react';
import { ButtonSubmit, ButtonReset } from './Button';
import "../css/AddPromemoriaForm.css"

const FormAddPromemoria = () => {
    const [titolo, setTitolo] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [data, setData] = useState('');
    const [orario, setOrario] = useState('');
    const [animals, setAnimals] = useState();
    const [open, setOpen] = useState(false);
    const [today, setToday] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        setToday(currentDate);
        setCurrentTime(currentTime);
    }, []);

    useEffect(() => {
        const requestOptions = {
            credentials: 'include',
        }
        fetch("https://itsar-project-work-api.vercel.app/animals", requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            setAnimals(result);
        })
    }, [])

    useEffect(() => {
        console.log(animals)
    }, [animals]);

    function onModificaTitolo (e) {
        setTitolo(e.target.value);
    }

    function onModificaDescrizione (e) {
        setDescrizione(e.target.value);
    }

    function onModificaData (e) {
        setData(e.target.value);
    }

    function onModificaOrario (e) {
        setOrario(e.target.value);
    }

    const handleCheckboxChange = (event) => {
        const checkboxId = Number(event.target.value);
        if (event.target.checked) {
          setSelectedCheckboxes((prevState) => [...prevState, checkboxId]);
        } else {
          setSelectedCheckboxes((prevState) =>
            prevState.filter((id) => id !== checkboxId)
          );
        }
    };

    const getAnimalNameById = (id) => {
        const animal = animals.find((animale) => animale.id === id);
        return animal ? animal.nome_animale : "";
    };

    function handleSubmit (e) {
        e.preventDefault();
        const promemoria = {
            titolo: titolo,
            descrizione: descrizione,
            data: data,
            orario: orario,
            animali: selectedCheckboxes
        }
        console.log(promemoria)
    }

    return (
        <form className="style" onSubmit={handleSubmit}>
                <label className="label">Titolo: </label>
                <input type="text" className="input" name="titolo" value={titolo} onChange={onModificaTitolo} required/> 

                <label className="label">Descrizione: </label>   
                <input type="text" name="descrizione" className="input" value={descrizione}  onChange={onModificaDescrizione} />

                <label className="label">Data: </label>
                <input type="date" min={today} name="data" className="inputDate" value={data}  onChange={onModificaData} required />

                <label className="label">Orario: </label>
                <input type="time" min={currentTime} name="orario" className="inputDate" value={orario}  onChange={onModificaOrario} required />

                <label className="label">Animale: </label>
                


                <div style={styles.container}>
                    <div style={open ? {...styles.button, borderRadius: '20px 20px 0 0'} : styles.button}>
                        <p onClick={() => setOpen(!open)} style={styles.buttonText}>menu</p>
                        {open && (
                        <div style={styles.items} className="promemoriaListaAnimali">
                            {animals.map((animale) => (
                            <div key={animale.id} style={styles.inputCheckbox} >
                                <label htmlFor={animale.id} style={selectedCheckboxes.includes(animale.id) ? {textDecoration: 'underline'} : {textDecoration: 'none'}}>{animale.nome_animale}</label>
                                <input
                                type="checkbox"
                                value={animale.id}
                                checked={selectedCheckboxes.includes(animale.id)}
                                onChange={handleCheckboxChange}
                                id={animale.id}
                                style={{display: 'none'}}                       
                                />
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                </div>








                <div></div>
                <div className="buttonsBottomForm">
                    <ButtonReset text="Anulla" />
                    <ButtonSubmit text="Crea" />
                </div>

        </form>
    )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textTransform: 'uppercase'
    },
    button: {
      border: "1px solid rgb(156, 148, 148)",
      borderRadius: "50px",
      width: "100%",
      height: "2.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
      userSelect: "none",
      backgroundColor: 'white',
      color: 'black',
      minWidth: '5rem',
      maxWidth: '77%',
      zIndex: 3,
    },
    items: {
      position: "absolute",
      top: "2.5rem",
      left: 0,
      width: "100%",
      borderRadius: '0 0 20px 20px',    
      backgroundColor: 'white',
      display: "flex",
      flexDirection: "column",
      maxHeight: "6rem",
      overflowX: 'hidden',
      overflowY: 'scroll',
      zIndex: 2
    },
    inputCheckbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '10%'
    },
    item: {
        color: 'white',
    }
  };


export default FormAddPromemoria;






/*
<ul>
    {selectedCheckboxes.map((item) => {
    const name = getAnimalNameById(item);
    return <li style={styles.item} key={item} >{name}</li>;
    })}
</ul>

*/