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
                
                <div></div>







                <div style={styles.container}>
                <div style={styles.button}>
                    <p onClick={() => setOpen(!open)}>menu</p>
                    {open && (
                    <div style={styles.items}>
                        {animals.map((animale) => (
                        <div key={animale.id} style={styles.inputCheckbox} >
                            <label htmlFor={animale.nome_animale}>{animale.nome_animale}</label>
                            <input
                            type="checkbox"
                            value={animale.id}
                            checked={selectedCheckboxes.includes(animale.id)}
                            onChange={handleCheckboxChange}                            
                            />
                        </div>
                        ))}
                    </div>
                    )}
                </div>
                <ul>
                    {selectedCheckboxes.map((item) => {
                    const name = getAnimalNameById(item);
                    return <li style={styles.item} key={item} >{name}</li>;
                    })}
                </ul>
                </div>









                <div className="buttonsBottomForm">
                    <ButtonReset text="Anulla" />
                    <ButtonSubmit text="Crea" />
                </div>

        </form>
    )
}


const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      width: '100%'
    },
    button: {
      border: "1px solid black",
      borderRadius: "50px",
      width: "8rem",
      height: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
      userSelect: "none",
      backgroundColor: 'white',
      color: 'black',
    },
    items: {
      position: "absolute",
      top: "2rem",
      left: 0,
      width: "8rem",
      border: "1px solid black",
      borderRadius: '15px',
      backgroundColor: 'white',
      display: "flex",
      flexDirection: "column",
      maxHeight: "6rem",
      overflowY: "scroll",
      overflowX: 'hidden'
    },
    inputCheckbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    item: {
        color: 'white',
    }
  };


export default FormAddPromemoria;