import React, {useState, useEffect} from 'react';
import { ButtonSubmit, ButtonReset } from './Button';
import Remove from "../media/remove.svg"
import "../css/AddPromemoriaForm.css"
//import Input from "@mui/material/Input";
//import InputAdornment from "@mui/material/InputAdornment"; //to install it, write the command: npm install @mui/material @emotion/react; npm install @emotion/styled @mui/lab @mui/icons-material

const PromemoriaForm = () => {
    
    const [animali, setAnimali] = useState([
        {id: "1", name:"Fido"},
        {id: "2", name:"Pippo"},
        {id: "3", name:"Siiumm"},
    ])

    const [formData, setFormData] = useState({})
    const [today, setToday] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        setToday(currentDate);
        setCurrentTime(currentTime);
    }, []);

    const [titolo, setTitolo] = useState("")
    const [descrizione, setDescrizione] = useState("")
    const [data, setData] = useState("")
    const [orario, setOrario] = useState("")
    const [arrayId, setArrayId] = useState([])

    const onModificaTitolo = (e) =>{
        const valore = e.target.value
        setTitolo(valore)
    }

    const onModificaDescrizione = (e) =>{
        const valore = e.target.value
        setDescrizione(valore)
    }

    const onModificaData = (e) =>{
        const valore = e.target.value
        setData(valore)
    }

    const onModificaOrario = (e) =>{
        const valore = e.target.value
        setOrario(valore)
    }

    const aggiungiArray = (n) =>{
        animali.map((a)=>{
            if(a.name === n)
            {
                arrayId.push(a.id)
            }
        })
    }

    const onAggiungiAnimale = (e) =>{
        if(e.target.value !== "null")
        {
            const nome = e.target.value
            console.log(nome)
            aggiungiArray(nome)
            ciao()
        }
    }

    const reset = () =>{
        setTitolo("")
        setDescrizione("")
        setData("")
        setOrario("")
        setArrayId([])
    }

    const handleSubmit = (e) => {
        const array = Array.from(new Set(arrayId))
        setArrayId(array)
        e.preventDefault();
        const json = {titolo, descrizione, data, orario, arrayId}
        setFormData(json)
        reset()
    };

    useEffect(()=>{
        console.log(formData)
    },[formData])

    const ciao = () =>{
        const risultati = arrayID.map(id => {
            const oggettoCorrispondente = animali.find(obj => obj.id === id);
          
            // Verifica se l'ID è già stato inserito
            if (risultati.find(result => result && result.id === id)) {
              return null; // Ignora l'elemento duplicato
            }
          
            // Restituisci il nuovo oggetto con l'ID e il nome corrispondente
            return {
              id: id,
              nome: oggettoCorrispondente ? oggettoCorrispondente.nome : 'Oggetto non trovato'
            }
          }).filter(result => result !== null)

          console.log(risultati)
    }

    return(
        
        <form className="style" onSubmit={handleSubmit}>
                <label className="label">Titolo: </label>
                <input type="text" className="input" name="titolo" value={titolo} onChange={onModificaTitolo} required/> 

                <label className="label">Descrizione: </label>   
                <input type="text" name="descrizione" className="input" value={descrizione}  onChange={onModificaDescrizione} />

                <label className="label">Data: </label>
                <input type="date" min={today} name="data" className="inputDate" value={data}  onChange={onModificaData} required />

                <label className="label">Orario: </label>
                <input type="time" min={currentTime} name="orario" className="inputDate"value={orario}  onChange={onModificaOrario} required />

                <label className="label">Animale: </label>
                <select id="select" onChange={onAggiungiAnimale}>
                    <option value="null">Seleziona Animale</option>
                    {
                        animali.map((animale)=>(
                            <option key={animale.id} value={animale.name}>{animale.name}</option>
                        ))
                    }
                </select>
                <div></div>
                <div id = "divAnimali">
                    <p id="divContenuto">
                        <img className='img' src={Remove} width={12} height={12}/>
                    </p>
                </div>
                <div></div>

                <div className="buttonsBottomForm">
                    <ButtonReset text="Anulla" />
                    <ButtonSubmit text="Crea" />
                </div>

        </form>


    );
}

export default PromemoriaForm;

