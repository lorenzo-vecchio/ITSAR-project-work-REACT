import React, {useState, useEffect} from 'react';
import { ButtonSubmit, ButtonReset } from './Button';
import { useNavigate, NavLink } from "react-router-dom";
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
    const [minDate, setMinDate] = useState()

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

    function onModificaTitolo (e) {
        setTitolo(e.target.value);
    }

    function onModificaDescrizione (e) {
        setDescrizione(e.target.value);
    }

    function onModificaData (e) {
        setData(e.target.value);
        if(data!==today)
        {
            setMinDate("00:00")
        }
        else
        {
            setMinDate(currentTime)
        }
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

    const removeAnimal = (idToRemove) => {
        setSelectedCheckboxes(selectedCheckboxes.filter((id) => id !== idToRemove));
      };
      
    function handleSubmit (e) {
        e.preventDefault();
        const promemoria = {
            titolo: titolo,
            descrizione: descrizione,
            data_ora: `${data}T${orario}:00`,
            animali: selectedCheckboxes
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(promemoria),
            credentials: "include"
          };
          fetch("https://itsar-project-work-api.vercel.app/promemoria", requestOptions)
          .then((response) => {
            if (response.status === 200) {
                alert("Promemoria aggiunto!")
              // metti spunta di successo
            }
          });
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
                <input type="time" min={minDate} name="orario" className="inputDate" value={orario}  onChange={onModificaOrario} required />

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

                <label className="label">Animali selezionati: </label>
                <div style={styles.selAnimalsContainer}>
                    {selectedCheckboxes.map((item) => {
                    const name = getAnimalNameById(item);
                    return (
                        <div style={styles.item} key={item}>
                            <p style={{margin: 0}}>{name}</p>
                            <svg onClick={() => removeAnimal(item)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </div>)
                    })}
                </div>




                <div></div>
                <div className="buttonsBottomForm">
                    <NavLink to={"/"}><ButtonReset text="Anulla" /></NavLink>
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
      width: "95%",
      minWidth: '5rem',
      maxWidth: '12rem',
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
      zIndex: 3,
    },
    items: {
      position: "absolute",
      top: "2.5rem",
      left: 0,
      width: "100%",
      minWidth: '5rem',
      maxWidth: '12rem',
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
        padding: '0.5rem',
        border: '1px solid black',
        borderRadius: '10px',
        height: '1rem',
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selAnimalsContainer: {
        marginTop: '5rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        width: "100%",
        minWidth: '5rem',
        maxWidth: '12rem',
        minHeight: '2rem',
        border: '1px solid black',
        borderRadius: '20px',
        padding: '30px',
        backgroundColor: 'white',
    }
  };


export default FormAddPromemoria;